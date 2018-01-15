const { translationFilesDescription } = require('../constants');

const detectTranslationsFileType = (path = '') => {
  const fileName = path.split('/').pop();
  const detected = translationFilesDescription.find(item => item.fileName === fileName);
  return detected ? detected.type : null;
};

module.exports = detectTranslationsFileType;
