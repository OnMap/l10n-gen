const archiver = require('archiver');
const { translationsFileTypes } = require('../../constants');
const { reduceTranslationsToStringForIOS } = require('./iosBuilderUtils');
const { buildTranslationsXML } = require('./androidBuilderUtils');
const buildFilePath = require('./pathBuilder');

const translationsToString = (translations, appType) => {
  switch (appType) {
    case translationsFileTypes.IOS: return reduceTranslationsToStringForIOS(translations);
    case translationsFileTypes.ANDROID: return buildTranslationsXML(translations);
    default: throw new Error('Wrong application type');
  }
};

const fillZip = (allTranslations = {}, applicationType, archiveInst) => {
  const appType = applicationType && applicationType.toUpperCase();

  Object.keys(allTranslations).forEach((language) => {
    const file = translationsToString(allTranslations[language], appType);
    archiveInst.append(file, { name: buildFilePath(appType, language) });
  });
};

const createArchiveInst = () => {
  const archive = archiver('zip', {
    store: true,
    zlib: { level: 9 } // Sets the compression level.
  });

  // good practice to catch warnings (ie stat failures and other non-blocking errors)
  archive.on('warning', (err) => {
    if (err.code === 'ENOENT') {
      // log warning
      /* eslint-disable no-console */
      console.warn(err);
    } else {
      // throw error
      throw err;
    }
  });

  // good practice to catch this error explicitly
  archive.on('error', (err) => {
    throw err;
  });

  return archive;
};

module.exports = {
  createArchiveInst,
  fillZip
};
