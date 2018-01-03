const fromPairs = require('lodash/fromPairs');
const { platformType } = require('../constants');
const androidStringsParse = require('./strings-android');
const iosStringsParse = require('./strings-ios');
const { collectiOSKeys, localizationiOSFiles } = require('./source-ios');

const translationsTextToObject = (text = '', type) => {
  switch (type) {
    case platformType.IOS: return iosStringsParse(text);
    case platformType.ANDROID: return androidStringsParse(text);
    default: return null;
  }
};

const sourceFilesToKeys = async (dir = '', type) => {
  switch (type) {
    case platformType.IOS: {
      const files = localizationiOSFiles(dir);
      return collectiOSKeys(files);
    }
    case platformType.ANDROID: {
      const files = localizationiOSFiles(dir);
      return collectiOSKeys(files);
    }
    default: return null;
  }
};

const translationFilesToObject = async (translationsText = '', type) => {
  const translationsPairs = await translationsTextToObject(translationsText, type);
  return fromPairs(translationsPairs);
};

module.exports = {
  sourceFilesToKeys,
  translationFilesToObject
};
