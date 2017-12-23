/*
  yarn shift -- 'script_folder_name <options>'

  Really helpful -> https://astexplorer.net
  Example: https://astexplorer.net/#/gist/baf3cd93afc1da2ee06e4243b35a0a5d/48f99b35fa593f21c256adf5bc8431e5eb5e4397

  Options:
    --write - will write the files
      Defaults: * false

    --all - will run on the whole project directory (./src/*)
      Defaults: * false (will use relative ./from.js source)

    --path - optional string, runs on files within the specified path
      Must be used together with --all

    --print - will print the diff to console
      Defaults: * false - when running with --all
                * true - otherwise

    --no-print - will not print the diff to the console
      Defaults: * true - when running with --all
                * false - otherwise

    --print-not-changed: - will print not changed lines in a diff
      Defaults: * true

    --print-ast: - will print AST diff (possible only together with --print)
      Defaults: * false
*/

const shell = require('shelljs');
const COLORS = require('./utils/colors');

const {
  folderName,
  write,
  all,
  path,
  print,
  printAst,
  noPrint,
  printNotChanged,
} = require('./get-cli-params')();

const filesPath = all ? path : `./internals/transform/${folderName}/from.js`;
const mainTransformPath = './internals/transform/main-transform.js';

process.env.SHIFT_SCRIPT_NAME = folderName;
process.env.SHIFT_PRINT = print || !noPrint;
process.env.SHIFT_PRINT_AST = printAst;
process.env.SHIFT_PRINT_NOT_CHANGED = printNotChanged;
process.env.RUNNING_ALL = all;

// TODO: Add path resolve relative to transform (this) folder
const command = `jscodeshift ${filesPath} -t ${mainTransformPath} --color=always ${write} --ignore-config=.gitignore`;

console.log(COLORS.UNDERSCORE, 'Running transform script:');
console.log(COLORS.MAGENTA, command);

shell.exec(command, (code, stdout, stderr) => {
  if (stderr) {
    console.error(stderr, code);
  } else {
    console.log(COLORS.GREEN, `✅  Finished with code ${code}`);
  }
  delete process.env.SHIFT_SCRIPT_NAME;
  delete process.env.SHIFT_PRINT;
  delete process.env.SHIFT_PRINT_AST;
  delete process.env.SHIFT_PRINT_NOT_CHANGED;
  delete process.env.RUNNING_ALL;
});
