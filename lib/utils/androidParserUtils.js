const get = require('lodash/get');
const { xmlParserOptions } = require('../constants/index');

const reduceAndroidTranslationsPairs = (array = []) => array
  .reduce((result, item) => {
    const key = get(item, `${xmlParserOptions.attrkey}.name`);
    const value = get(item, xmlParserOptions.charkey) || '';

    if (key) {
      result.push([ key, value ]);
    }

    return result;
  }, []);

module.exports = {
  reduceAndroidTranslationsPairs
};
