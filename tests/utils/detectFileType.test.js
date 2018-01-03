const detectTranslationsFileType = require('../../src/utils/detectFileType');
const { platformType } = require('../../src/constants');

describe('Detection file type', () => {
  it('return file type by paths', () => {
    const iOSFilePath = 'he.lproj/Localizable.strings';
    const androidFilePath = 'values-en/strings.xml';
    const unknownFilePath = 'values-en/more_string_array.xml';

    expect(detectTranslationsFileType(iOSFilePath)).toEqual(platformType.IOS);
    expect(detectTranslationsFileType(androidFilePath)).toEqual(platformType.ANDROID);
    expect(detectTranslationsFileType(unknownFilePath)).toEqual(null);
  });
});
