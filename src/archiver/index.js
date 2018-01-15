const fs = require('fs');
const { createArchiveInst, fillZip } = require('./utils/archiverUtils');

const zipTranslations = (data, appType, outputPath) =>
  new Promise(res => {
    const output = fs.createWriteStream(outputPath);
    const archive = createArchiveInst();

    output.on('close', () => {
      res();
    });

    archive.pipe(output);
    fillZip(data, appType, archive);

    archive.finalize();
  });

module.exports = zipTranslations;
