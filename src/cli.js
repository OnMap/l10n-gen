import program from 'commander';
// import { uploadKeys } from './parseltounge';

program
  .arguments('<dir>')
  .description('')
  .action(dir => {
    // eslint-disable-next-line no-console
    console.log(dir);
  });

program.parse(process.argv);
