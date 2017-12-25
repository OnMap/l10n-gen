#!/usr/bin/env node

const zipTranslations = require('./src/archiver');

const program = require('commander');

const pckg = require('./package.json');
const localizationiOSFiles = require('./src/parse/source-ios');

program
  .version(pckg.version);

program
  .arguments('<dir>')
  .description('')
  .action((dir) => {
    // let dir2 = process.argv[3]
    // console.log(dir2)
    const found = localizationiOSFiles(dir);
    console.log(found);
  });

program.parse(process.argv);

module.exports.zipTranslationsTo = zipTranslations;
