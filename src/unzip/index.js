const unzip = require('unzip2');
const { entryTypes } = require('../constants');
const detectTranslationsFileType = require('../utils/detectFileType');
const textParser = require('../parse');

const unzipTranslationsFromStream = (stream, callback) =>
  stream
    .pipe(unzip.Parse()) // eslint-disable-line babel/new-cap
    .on('entry', entry => {
      const { type, path } = entry;
      const translationsFileType = detectTranslationsFileType(path);

      if (type === entryTypes.FILE && !!translationsFileType) {
        entry.on('data', data => {
          const fileText = data.toString();
          textParser(fileText, translationsFileType)
            .then(result => callback(result))
            /* eslint-disable no-console */
            .catch(err => console.error(err));
        });
      } else {
        entry.autodrain();
      }
    });

module.exports = {
  unzipFromStream: unzipTranslationsFromStream
};
