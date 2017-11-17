const { translationsFileNames } = require('../constants');

const detectTranslationsFileType = (path = '') => {
  const fileName = path.split('/').pop();
  const detected = translationsFileNames.find(item => (item.fileName === fileName));
  return (detected) ? detected.type : null;
};

module.exports = detectTranslationsFileType;
