const { trimTranslationItem } = require('../../utils/iosParserUtils');

describe('iOS translations file text parser utils', () => {
  it('remove unnecessary chars', () => {
    expect(trimTranslationItem('test')).toEqual('test');
    expect(trimTranslationItem('הגר"א 18, חולון')).toEqual('הגר"א 18, חולון');
    expect(trimTranslationItem(" \"הגר\"א 18, חולון\" ")).toEqual('הגר"א 18, חולון');
    expect(trimTranslationItem(" \"הגר\"א 18, חולון\"; ")).toEqual('הגר"א 18, חולון');
    expect(trimTranslationItem(" \"אישור\";")).toEqual('אישור');
    expect(trimTranslationItem("\"RRC-Yd-tgh.normalTitle\" ")).toEqual('RRC-Yd-tgh.normalTitle');
  });
});
