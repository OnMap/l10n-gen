#!/usr/bin/env node

const zipTranslations = require('./lib/archiver')

const program = require('commander')

const pckg = require('./package.json')
const localizationFiles = require('./lib/parser/source-ios')


program
.version(pckg.version)

program
.arguments('<dir>')
.description('')
.action(function(dir){
    // let dir2 = process.argv[3]
    // console.log(dir2)
    let found = localizationFiles(dir)
    console.log(found)
})

program.parse(process.argv)


module.exports.zipTranslationsTo = zipTranslations
