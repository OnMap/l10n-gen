const { allTranslationsFileNames } = require('../constants');

const detectTranslationsFileType = (path = '') => {
  const fileName = path.split('/').pop();
  const detected = allTranslationsFileNames.find(item => (item.fileName === fileName));
  return (detected) ? detected.type : null;
};

module.exports = detectTranslationsFileType;
