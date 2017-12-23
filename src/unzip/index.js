const unzip = require('unzip2');
const { entryTypes } = require('../constants');
const detectTranslationsFileType = require('../utils/detectFileType');
const textParser = require('../parser');

const unzipTranslationsFromStream = (stream, callback) => stream
  .pipe(unzip.Parse())
  .on('entry', (entry) => {
    const { type, path } = entry;
    const translationsFileType = detectTranslationsFileType(path);

    if (type === entryTypes.FILE && !!translationsFileType) {
      entry.on('data', (data) => {
        const fileText = data.toString();
        textParser(fileText, translationsFileType)
          .then(result => callback(result))
          .catch(err => console.error(err));
      });
    } else {
      entry.autodrain();
    }
  });

module.exports = {
  unzipFromStream: unzipTranslationsFromStream,
};

