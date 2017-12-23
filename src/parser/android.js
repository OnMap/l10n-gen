const { Parser } = require('xml2js');
const get = require('lodash/get');
const { xmlParserOptions, xmlBuilderOptions } = require('../constants/index');
const { reduceAndroidTranslationsPairs } = require('../utils/androidParserUtils');

const xmlParser = new Parser(xmlParserOptions);

const androidTranslationsTextToMatrix = (text = '') => new Promise(resolve => xmlParser
  .parseString(text, (err, result) => {
    const translationsArray = get(result, xmlBuilderOptions.tagName) || [];
    const translationsPairs = reduceAndroidTranslationsPairs(translationsArray);
    resolve(translationsPairs);
  }));

module.exports = androidTranslationsTextToMatrix;
