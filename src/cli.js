
import program from 'commander';
// import { uploadKeys } from './parseltounge';

program
  .arguments('<dir>')
  .description('')
  .action((dir) => {
    console.log(dir);
  });

program.parse(process.argv);
