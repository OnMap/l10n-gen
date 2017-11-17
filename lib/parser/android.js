const { Parser } = require('xml2js');
const get = require('lodash/get');
const { xmlParserOptions } = require('../constants/index');

const xmlParser = new Parser(xmlParserOptions);

const reduceAndroidTranslationsPairs = (array = []) => array
  .reduce((result, item) => {
    const key = get(item, `${xmlParserOptions.attrkey}.name`);
    const value = get(item, xmlParserOptions.charkey) || '';

    if (key) {
      result.push([ key, value ]);
    }

    return result;
  }, []);

const androidTranslationsTextToMatrix = async (text = '') => new Promise(
  (resolve) => xmlParser
    .parseString(text, (err, result) => {
      const translationsArray = get(result, 'string') || [];
      const translationsPairs = reduceAndroidTranslationsPairs(translationsArray);
      resolve(translationsPairs);
    })
  );

module.exports = androidTranslationsTextToMatrix;
