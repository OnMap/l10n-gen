const { parseLineToPair } = require('../utils/iosParserUtils');

const iOSTranslationsTextToMatrix = (text = '') => {
  const translationsPairs = text
    .split('\n')
    .filter(line => (line.includes('=')))
    .map(parseLineToPair);

  return Promise.resolve(translationsPairs)
};

module.exports = iOSTranslationsTextToMatrix;
