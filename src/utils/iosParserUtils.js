const trimTranslationItem = (string = '') => {
  let trimmedValue = string.trim();
  if (trimmedValue.endsWith(';')) {
    trimmedValue = trimmedValue.slice(0, -1);
  }

  return trimmedValue.replace(/^"(.+)"$/, '$1');
};

const parseLineToPair = (line = '') => line
  .split('=')
  .map(trimTranslationItem);

module.exports = {
  trimTranslationItem,
  parseLineToPair,
};
