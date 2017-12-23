const path = require('path');
const fs = require('fs');

const scriptName = process.env.SHIFT_SCRIPT_NAME;
const print = process.env.SHIFT_PRINT === 'true';
const printAst = process.env.SHIFT_PRINT_AST === 'true';
const printNotChanged = process.env.SHIFT_PRINT_NOT_CHANGED === 'true';
const runningAll = process.env.RUNNING_ALL === 'true';

const compareAst = require('./utils/compare-ast');
const printTextDiff = require('./utils/print-text-diff');

module.exports = function (fileInfo, api) {
  const j = api.jscodeshift;
  const ast = j(fileInfo.source);

  // eslint-disable-next-line global-require, import/no-dynamic-require
  const transform = require(path.resolve('.', 'internals', 'transform', scriptName, 'transform'));

  const transfromedAst = transform(ast, j) || ast;

  const source = runningAll
    ? transfromedAst.toSource()
    : fs.readFileSync(path.resolve(__dirname, scriptName, 'to.js'), { encoding: 'utf8' });

  if (print) {
    printTextDiff(fileInfo.source, source, {
      printNotChanged,
      header: 'File diff:'
    });
    const astDiff = compareAst(fileInfo.source, source);
    if (astDiff && printAst) {
      printTextDiff(astDiff.actual, astDiff.expected, {
        printNotChanged,
        header: 'AST diff:'
      });
    }
  }

  // TODO: Add assertion when running on reference files

  return source;
};
