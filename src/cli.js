
import program from 'commander';
import { sourceFilesToKeys } from './parse';
import { uploadKeys } from './parseltounge/updateKeys';
import { getLocalization } from './parseltounge/getLocalization';
import { parseltongueHost } from './constants';

program
  .command('uploadKeys [dir]')
  .description('Upload localization keys to parseltongue')
  .option('-t --token <token>')
  .option('-i --appId <appId>')
  .option('-s --server <server>', /^(local|dev|prod)$/i, 'dev')
  .option('-p --platform <platform>', /^(ios|android)$/i)
  .action((dir, options) => {
    sourceFilesToKeys(dir, options.platform.toUpperCase())
    .then((results) => {
      if (results.length) {
        console.log('Uploading keys: \n', results);
        uploadKeys(results, options.appId, options.token, parseltongueHost[options.server])
        .then(() => {
          console.log('Done updating keys');
        })
        .catch(err => console.error(err));
      } else {
        console.error('No keys were found!');
      }
    })
    .catch(err => console.error(err));
  });

program
  .command('download')
  .description('Download localization')
  .option('-t --token <token>')
  .option('-i --appId <appId>')
  .option('-s --server <server>', /^(local|dev|prod)$/i, 'dev')
  .option('-p --platform <platform>', /^(ios|android)$/i)
  .action((dir, options) => {

  });

program.parse(process.argv);
