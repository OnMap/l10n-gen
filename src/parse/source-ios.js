
const glob = require('glob');
const fs = require('fs');
const path = require('path');
const xpath = require('xml2js-xpath');
const flatten = require('lodash/flatten');
const { Parser } = require('xml2js');

const extensionPattern = '**/+(*.storyboard|Localizable*.swift)';
const storyboardKeyAttribute = '//userDefinedRuntimeAttribute';

const xmlParser = new Parser();
const parseStoryboardData = (data = '') => new Promise(resolve => xmlParser
  .parseString(data, (err, result) => {
    const matches = xpath.find(result.document, storyboardKeyAttribute);
    const keys = matches.map((match) => {
      return match.$.value;
    });

    resolve(keys);
  }));

const parseSwiftData = (data = '') => new Promise((resolve) => {
  const keys = [];
  const regex = /case *.* *= *"(.*)"/g;

  /* eslint-disable no-cond-assign */
  let match = '';
  while ((match = regex.exec(data)) !== null) {
    keys.push(match[1]);
  }

  resolve(keys);
});

const parseStoryboardFile = async (file = '') => {
  const data = fs.readFileSync(file, { encoding: 'utf8' });
  return parseStoryboardData(data);
};

const parseSwiftFile = (file = '') => {
  const data = fs.readFileSync(file, { encoding: 'utf8' });
  return parseSwiftData(data);
};

const collectiOSKeys = async (files = []) => {
  const promises = [];
  files.forEach((file) => {
    switch (path.extname(file)) {
      case '.storyboard': {
        promises.push(parseStoryboardFile(file));
        break;
      }
      case '.swift': {
        promises.push(parseSwiftFile(file));
        break;
      }
      default: {
        /* eslint-disable no-console */
        console.warn('Parser not found parser for', file);
        break;
      }
    }
  });

  return Promise.all(promises)
    .then(data => flatten(data))
    .catch(err => console.log('error', JSON.stringify(err, null, 4)));
};

const localizationiOSFiles = (dir = '.') => {
  const searchPath = path.join(dir, extensionPattern);
  return glob.sync(searchPath);
};

module.exports = {
  collectiOSKeys,
  localizationiOSFiles
};
