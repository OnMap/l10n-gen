const fromPairs = require('lodash/fromPairs');
const { translationsFileTypes } = require('../constants');
const androidStringsParse = require('./strings-android');
const iosStringsParse = require('./strings-ios');
const { collectiOSKeys, localizationiOSFiles } = require('./source-ios');

const translationsTextToObject = (text = '', type) => {
  switch (type) {
    case translationsFileTypes.IOS:
      return iosStringsParse(text);
    case translationsFileTypes.ANDROID:
      return androidStringsParse(text);
    default:
      return null;
  }
};

const sourceFilesToKeys = (dir = '', type) => {
  switch (type) {
    case translationsFileTypes.IOS: {
      const files = localizationiOSFiles(dir);
      return collectiOSKeys(files);
    }
    case translationsFileTypes.ANDROID: {
      const files = localizationiOSFiles(dir);
      return collectiOSKeys(files);
    }
    default:
      return null;
  }
};

const parseSourceFilesToKeys = (dir = '', type) => sourceFilesToKeys(dir, type);

const parseTranslationsFileToObject = async (translationsText = '', type) => {
  const translationsPairs = await translationsTextToObject(translationsText, type);
  return fromPairs(translationsPairs);
};

module.exports = {
  parseSourceFilesToKeys,
  parseTranslationsFileToObject
};
