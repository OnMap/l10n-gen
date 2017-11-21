const {
  translationsFileTypes,
  translationsFileNames,
  translationsDirectoryNames
} = require('../../constants/index');

const buildFilePath = (appType, language) => {
  let directory = '';
  const fileName = translationsFileNames[appType];
  const dirName = translationsDirectoryNames[appType];


  switch (appType) {
    case translationsFileTypes.IOS: {
      directory = `${language}${dirName}`;
      break;
    }
    default: {
      directory = language;
    }
  }
  return `${directory}/${fileName}`;
};

module.exports = buildFilePath;
