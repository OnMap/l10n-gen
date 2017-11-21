const { trimTranslationItem, parseLineToPair } = require('../../utils/iosParserUtils');

describe('iOS translations file text parser utils', () => {
  it('remove unnecessary chars', () => {
    expect(trimTranslationItem('test')).toEqual('test');
    expect(trimTranslationItem('הגר"א 18, חולון')).toEqual('הגר"א 18, חולון');
    expect(trimTranslationItem(" \"הגר\"א 18, חולון\" ")).toEqual('הגר"א 18, חולון');
    expect(trimTranslationItem(" \"הגר\"א 18, חולון\"; ")).toEqual('הגר"א 18, חולון');
    expect(trimTranslationItem(" \"אישור\";")).toEqual('אישור');
    expect(trimTranslationItem("\"RRC-Yd-tgh.normalTitle\" ")).toEqual('RRC-Yd-tgh.normalTitle');
  });

  it('parse text line to array', () => {
    const textLine = `"Login.InvalidEmail" = "הזן כתובת דוא״ל תקינה";`;
    const parsedText = ['Login.InvalidEmail', 'הזן כתובת דוא״ל תקינה'];

    expect(parseLineToPair(textLine)).toEqual(parsedText);
  });
});
