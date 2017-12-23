const fs = require('fs');
const COLORS = require('./utils/colors');

const getCliParams = () => {
  if (process.argv.length < 3) {
    throw new Error('Provide script folder name as a parameter');
  }

  const params = process.argv.slice(2)[0].split(' ');
  const folderName = params[0];
  const argv = params
    .slice(1)
    .join(' ')
    .trim();

  const write = argv.indexOf('--write') !== -1 ? '' : '-d';
  const all = argv.indexOf('--all') !== -1;
  const print = argv.indexOf('--print') !== -1;
  const noPrint = argv.indexOf('--no-print') !== -1 ? !print : all;
  const printAst = argv.indexOf('--print-ast') !== -1 ? print : false;
  const printNotChanged = argv.indexOf('--print-not-changed') !== -1;

  const pathIdx = argv.indexOf('--path');
  let path = './src/';
  if (pathIdx !== -1) {
    path = argv.substr(pathIdx);

    const equalsIdx = path.indexOf('=') + 1;
    if (!equalsIdx) {
      throw new Error('Path is not specified, use --path=./path/to/files');
    }

    let endIdx = path.indexOf(' ', equalsIdx);
    if (endIdx === -1) {
      endIdx = undefined;
    }

    path = path.slice(equalsIdx, endIdx);

    if (!path) {
      throw new Error('Path is not specified, use --path=./path/to/files');
    }

    if (!all) {
      console.warn(COLORS.YELLOW, 'Using --path has no effect without --all');
    }
  }

  if (!folderName) {
    throw new Error('You must specify the transform script folder');
  }

  if (!fs.existsSync(`${__dirname}/${folderName}`)) {
    throw new Error(`You must specify a valid transform script folder. "${folderName}" not found`);
  }

  return {
    folderName,
    write,
    all,
    path,
    print,
    printAst,
    noPrint,
    printNotChanged
  };
};

module.exports = getCliParams;
