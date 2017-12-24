
const glob = require('glob');
const fs = require('fs');
const path = require('path');
const xpath = require('xml2js-xpath');
const merge = require('lodash/merge');
const { Parser } = require('xml2js');

const extensionPattern = '**/*+(.swift|.storyboard)';
const storyboardKeyAttribute = '//userDefinedRuntimeAttribute';

const localizationFiles = (dir = '.') => {
  const searchPath = path.join(dir, extensionPattern);
  return glob.sync(searchPath);
};

const xmlParser = new Parser();
const parseStoryboardData = (string = '') => new Promise(resolve => xmlParser
  .parseString(string, (err, result) => {
    const matches = xpath.find(result.document, storyboardKeyAttribute);
    const keysObject = {};
    matches.forEach((match) => {
      keysObject[match.$.value] = '';
    });

    resolve(keysObject);
  }));

const parseStoryboardFile = async (file = '') => {
  const data = fs.readFileSync(file, { encoding: 'utf8' });
  return parseStoryboardData(data);
};

const parseSwiftFile = (file = '') => {
  console.log('parseSwift ' + file);
};

const collectKeys = async (files = []) => {
  const promises = [];
  files.forEach((file) => {
    switch (path.extname(file)) {
      case '.storyboard': {
        promises.push(parseStoryboardFile(file));
        break;
      }
      case '.swift': {
        // promises.push(parseSwiftFile(file));
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
    .then((data) => {
      return data.reduce((x, y) => {
        return merge(x, y);
      });
    })
    .catch(err => console.log('error', JSON.stringify(err, null, 2)));
};

module.exports = {
  localizationFiles,
  collectKeys
};
