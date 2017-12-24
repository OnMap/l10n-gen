const { localizationFiles, collectKeys } = require('../../src/parser/source-ios');

const foundFiles = [
  'tests/mocks_data/ios/source/Main.storyboard',
  'tests/mocks_data/ios/source/MainVC.swift'
];

const parsedKeysStoryboard = {
  'Main.SearchBar': '',
  'Main.TextView': '',
  'Main.TextField': '',
  'Main.ChangeLanguageButton': '',
  'Main.StoryboardLabel': '',
  'Main.SegmentedControl': '',
  'Main.TitleNavigationItem': ''
};

describe('iOS source parse', () => {

  it('Find all iOS oriented files to parse', async () => {
    const result = localizationFiles('./tests/mocks_data');
    expect(result).toEqual(foundFiles);
  });

  it('Find only iOS oriented files in folder', async () => {
    const noResult = localizationFiles('./tests/parser');
    expect(noResult).toEqual([]);
  });

  it('Collect keys in iOS oriented files', async () => {
    const files = localizationFiles('./tests/mocks_data');
    const result = await collectKeys(files);
    expect(result).toEqual(parsedKeysStoryboard);
  });
});
