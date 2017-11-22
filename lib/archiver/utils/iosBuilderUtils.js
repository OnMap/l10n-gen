const toPairs = require('lodash/toPairs');

const joinPairToLine = (pair = []) => pair
  .map(item => `"${item}"`)
  .join(' = ');

const reduceTranslationsToStringForIOS = (translationsObject = {}) => {
  const arrayOfPairs = toPairs(translationsObject);

  return arrayOfPairs
    .map(joinPairToLine)
    .join(';\n') + ';';
};

module.exports = {
  joinPairToLine,
  reduceTranslationsToStringForIOS
};
