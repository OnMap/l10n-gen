const { sourceFilesToKeys } = require('../../src/parse/index.js');

describe('iOS parse', () => {
  it('source files to keys', async () => {
    const result = await sourceFilesToKeys('./tests/mocks_data', 'IOS');
    expect(result).toMatchSnapshot();
  });
});

