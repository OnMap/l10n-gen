const { reduceAndroidTranslationsPairs } = require('../../parser/utils/androidParserUtils');

const parsedXml = [
  {
    value: 'הכל',
    key: { name: 'activity.filter.allPropertyPresentedOnTvProperties' } },
  {
    value: 'הצג',
    key: { name: 'activity.filter.property.count.show' } },
  {
    value: 'נכסים',
    key: { name: 'activity.filter.property.count.properties' }
  }
];

const parsedXmlReducedToArrayOfPairs = [
  ['activity.filter.allPropertyPresentedOnTvProperties', 'הכל'],
  ['activity.filter.property.count.show', 'הצג'],
  ['activity.filter.property.count.properties', 'נכסים']
];

describe('Android translations file text parser utils', () => {
  it('reduce parsed xml to array of pairs', () => {
    expect(reduceAndroidTranslationsPairs(parsedXml)).toEqual(parsedXmlReducedToArrayOfPairs);
  });
});
