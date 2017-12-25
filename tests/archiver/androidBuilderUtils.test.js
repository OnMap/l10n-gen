const { convertObjectToParsedXML, buildTranslationsXML } = require('../../src/archiver/utils/androidBuilderUtils');

describe('Builder utils for Android', () => {
  const translationsObject = {
    'activity.filter.allPropertyPresentedOnTvProperties': 'הכל',
    'activity.filter.property.count.show': 'הצג',
    'activity.filter.property.count.properties': 'נכסים'
  };

  it('convert translations object to xmlBuilder format', () => {
    expect(convertObjectToParsedXML(translationsObject)).toMatchSnapshot();
  });

  it('build XML string from translations object', () => {
    expect(buildTranslationsXML(translationsObject)).toMatchSnapshot();
  });
});
