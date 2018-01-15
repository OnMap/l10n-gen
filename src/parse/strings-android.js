const { Parser } = require('xml2js');
const get = require('lodash/get');
const { xmlParserOptions, xmlBuilderOptions } = require('../constants/index');
const { reduceAndroidTranslationsPairs } = require('../utils/androidParserUtils');

const xmlParser = new Parser(xmlParserOptions);

const androidTranslationsTextToMatrix = (text = '') =>
  new Promise((resolve, reject) =>
    xmlParser.parseString(text, (err, result) => {
      if (err) {
        return reject(err);
      }
      const translationsArray = get(result, xmlBuilderOptions.tagName) || [];
      const translationsPairs = reduceAndroidTranslationsPairs(translationsArray);

      return resolve(translationsPairs);
    })
  );

module.exports = androidTranslationsTextToMatrix;
