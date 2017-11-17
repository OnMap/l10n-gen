const { Parser } = require('xml2js');
const get = require('lodash/get');
const { xmlParserOptions } = require('../constants/index');
const { reduceAndroidTranslationsPairs } = require('../utils/androidParserUtils');

const xmlParser = new Parser(xmlParserOptions);

const androidTranslationsTextToMatrix = async (text = '') => new Promise(
  (resolve) => xmlParser
    .parseString(text, (err, result) => {
      const translationsArray = get(result, 'string') || [];
      const translationsPairs = reduceAndroidTranslationsPairs(translationsArray);
      resolve(translationsPairs);
    })
  );

module.exports = androidTranslationsTextToMatrix;
