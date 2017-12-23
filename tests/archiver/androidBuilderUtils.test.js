const { convertObjectToParsedXML, buildTranslationsXML } = require('../../src/archiver/utils/androidBuilderUtils');

describe('Builder utils for Android', () => {
  const translationsObject = {
    'activity.filter.allPropertyPresentedOnTvProperties': 'הכל',
    'activity.filter.property.count.show': 'הצג',
    'activity.filter.property.count.properties': 'נכסים'
  };
  const parsedXML = {
    string: [
      {
        _: 'הכל',
        $: { name: 'activity.filter.allPropertyPresentedOnTvProperties' }
      },
      {
        _: 'הצג',
        $: { name: 'activity.filter.property.count.show' }
      },
      {
        _: 'נכסים',
        $: { name: 'activity.filter.property.count.properties' }
      }
    ]
  };

  const xmlString = `<?xml version="1.0" encoding="utf-8"?>
<resources>
  <string name="activity.filter.allPropertyPresentedOnTvProperties">הכל</string>
  <string name="activity.filter.property.count.show">הצג</string>
  <string name="activity.filter.property.count.properties">נכסים</string>
</resources>`;

  it('convert translations object to xmlBuilder format', () => {
    expect(convertObjectToParsedXML(translationsObject)).toEqual(parsedXML);
  });

  it('build XML string from translations object', () => {
    expect(buildTranslationsXML(translationsObject)).toEqual(xmlString);
  });
});
