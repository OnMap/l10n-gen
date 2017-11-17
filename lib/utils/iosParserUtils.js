const trimTranslationItem = (string = '') => {
  let trimmedValue = string.replace(/"/g, '').trim();
  if (trimmedValue.endsWith(';')) {
    trimmedValue = trimmedValue.slice(0, -1);
  }
  return trimmedValue;
};

const parseLineToPair = (line = '') => line
  .split('=')
  .map(trimTranslationItem);

module.exports = {
  trimTranslationItem,
  parseLineToPair
};
