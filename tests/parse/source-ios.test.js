const { collectiOSKeys, localizationiOSFiles } = require('../../src/parse/source-ios');

describe('iOS source parse', () => {
  it('find all iOS oriented files to parse', () => {
    const result = localizationiOSFiles('./tests/__mocks__');
    expect(result).toMatchSnapshot();
  });

  it('find only iOS oriented files in folder', () => {
    const noResult = localizationiOSFiles('./tests/parse');
    expect(noResult).toEqual([]);
  });

  it('collect keys in iOS oriented files', async () => {
    const files = localizationiOSFiles('./tests/__mocks__');
    const result = await collectiOSKeys(files);
    expect(result).toMatchSnapshot();
  });
});
