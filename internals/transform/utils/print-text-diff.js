/*
  Prints the diff of two text files line by line (like git)
  More advanced web version - http://incaseofstairs.com/jsdiff/
*/

const diff = require('jest-diff');
const COLORS = require('./colors');

const printDiff = (was, now, { printNotChanged = true, printLegend = false, header = '' } = {}) => {
  const textDiff = diff(was, now);
  let printCalled = false;

  if (header) {
    console.log(COLORS.CYAN, header);
  }

  textDiff.split('\n').forEach((line) => {
    const first = line[0];
    if (first === '+' || first === '-') {
      const color = first === '+' ? COLORS.GREEN : COLORS.RED;
      if (!printLegend) {
        if (line === '- Expected' || line === '+ Received') {
          return;
        }
      }
      console.log(color, line);
      printCalled = true;
    } else if (printNotChanged) {
      console.log(line);
      printCalled = true;
    }
  });

  if (!printCalled) {
    console.log(COLORS.CYAN, 'Files are identical. No diff.');
  }
};

module.exports = printDiff;
