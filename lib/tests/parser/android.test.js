const androidTranslationsTextToMatrix = require('../../parser/android');

const xmlString = `
  <?xml version="1.0" encoding="utf-8"?>
  <resources>
    <string name="onboarding.first.titleTV">"פשוט לחפש בית"</string>
    <string name="onboarding.first.onmap">"OnMap"</string>
    <string name="onboarding.first.descriptionTV">"חיפוש מותאם אישית על גבי מפה חיה\\nשיעזור לך למצוא נכסים באיזור בו תבחר"</string>

    <string name="onboarding.third.doneBtn">התחל לחפש</string>
  </resources>
`;

const parsedXml = [
  ['onboarding.first.titleTV', `"פשוט לחפש בית"`],
  ['onboarding.first.onmap', `"OnMap"`],
  ['onboarding.first.descriptionTV', `"חיפוש מותאם אישית על גבי מפה חיה\\nשיעזור לך למצוא נכסים באיזור בו תבחר"`],
  ['onboarding.third.doneBtn', 'התחל לחפש'],
];

describe('Android text parser', () => {
  it('parse android xml text translations to array of pairs', async () => {
    const result = await androidTranslationsTextToMatrix(xmlString);
    expect(result).toEqual(parsedXml);
  });
});
