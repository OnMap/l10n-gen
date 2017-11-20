const fs = require('fs');
const { createArchiveInst, fillZip } = require('./utils/archiverUtils');

const zipTranslations = (data, appType, outputPath) => {
  const output = fs.createWriteStream(outputPath);
  const archive = createArchiveInst();

  archive.pipe(output);
  fillZip(data, appType, archive);

  archive.finalize();
};

module.exports = zipTranslations;
