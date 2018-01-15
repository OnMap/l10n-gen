const fs = require('fs');
const path = require('path');
const glob = require('glob');
const xpath = require('xml2js-xpath');
const flatten = require('lodash/flatten');
const { Parser } = require('xml2js');

const extensionPattern = '**/+(*.storyboard|Localizable*.swift)';
const storyboardKeyAttribute = '//userDefinedRuntimeAttribute';

const xmlParser = new Parser();
const swiftCaseStatementRegex = /case *.* *= *"(.*)"/g;

const parseStoryboardData = (data = '') =>
  new Promise((resolve, reject) =>
    xmlParser.parseString(data, (err, result) => {
      if (err) {
        return reject(err);
      }

      const matches = xpath.find(result.document, storyboardKeyAttribute);
      const keys = matches.map(match => match.$.value);

      return resolve(keys);
    })
  );

function* getNextCase(data) {
  let match = null;
  do {
    match = swiftCaseStatementRegex.exec(data);
    if (match) {
      yield match[1];
    }
  } while (match !== null);
}

const parseSwiftData = (data = '') => Array.from(getNextCase(data));

const readFile = file => fs.readFileSync(file, { encoding: 'utf8' });
const parseStoryboardFile = (file = '') => parseStoryboardData(readFile(file));
const parseSwiftFile = (file = '') => parseSwiftData(readFile(file));

const collectiOSKeys = async (files = []) => {
  const parsePromises = files.map(file => {
    switch (path.extname(file)) {
      case '.storyboard':
        return parseStoryboardFile(file);

      case '.swift':
        return parseSwiftFile(file);

      default: {
        /* eslint-disable no-console */
        console.warn('Parser not found parser for', file);
        return null;
      }
    }
  });

  const result = await Promise.all(parsePromises);
  return flatten(result.filter(file => !!file));
};

const localizationiOSFiles = (dir = '.') => {
  const searchPath = path.join(dir, extensionPattern);
  return glob.sync(searchPath);
};

module.exports = {
  collectiOSKeys,
  localizationiOSFiles
};
