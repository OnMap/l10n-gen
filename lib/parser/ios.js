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

const iOSTranslationsTextToMatrix = (text = '') => {
  const translationsPairs = text
    .split('\n')
    .filter(line => (line.includes('=')))
    .map(parseLineToPair);

  return Promise.resolve(translationsPairs)
};

module.exports = iOSTranslationsTextToMatrix;
