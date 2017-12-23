const fromPairs = require('lodash/fromPairs');
const { translationsFileTypes } = require('../constants');
const androidFileParser = require('./android');
const iosFileParser = require('./ios');

const translationsTextToMatrix = (text = '', type) => {
  switch (type) {
    case translationsFileTypes.IOS: return iosFileParser(text);
    case translationsFileTypes.ANDROID: return androidFileParser(text);
    default: return null;
  }
};

// Output example
// translationsObject = {
//   someKey: someValue,
//   anotherKey: anotherValue,
//   ...
// }
const parseTranslationsFileToObject = async (translationsText = '', type) => {
  const translationsPairs = await translationsTextToMatrix(translationsText, type);
  return fromPairs(translationsPairs);
};

module.exports = parseTranslationsFileToObject;
