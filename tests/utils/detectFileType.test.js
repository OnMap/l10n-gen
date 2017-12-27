const detectTranslationsFileType = require('../../src/utils/detectFileType');
const { translationsFileTypes } = require('../../src/constants');

describe('Detection file type', () => {
  it('return file type by paths', () => {
    const iOSFilePath = 'he.lproj/Localizable.strings';
    const androidFilePath = 'values-en/strings.xml';
    const unknownFilePath = 'values-en/more_string_array.xml';

    expect(detectTranslationsFileType(iOSFilePath)).toEqual(translationsFileTypes.IOS);
    expect(detectTranslationsFileType(androidFilePath)).toEqual(translationsFileTypes.ANDROID);
    expect(detectTranslationsFileType(unknownFilePath)).toEqual(null);
  });
});
