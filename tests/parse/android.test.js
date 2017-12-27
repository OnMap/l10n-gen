import androidTranslationsTextToMatrix from '../../src/parse/strings-android';

const xmlString = `
  <?xml version="1.0" encoding="utf-8"?>
  <resources>
    <string name="onboarding.first.titleTV">"פשוט לחפש בית"</string>
    <string name="onboarding.first.onmap">"OnMap"</string>
    <string name="onboarding.first.descriptionTV">"גבי מפה חיה\\nשיעזור לך תבחר"</string>

    <string name="onboarding.third.doneBtn">התחל לחפש</string>
  </resources>
`;

describe('Android text parser', () => {
  it('parse android xml text translations to array of pairs', async () => {
    const result = await androidTranslationsTextToMatrix(xmlString);
    expect(result).toMatchSnapshot();
  });
});
