const { parseSourceFilesToKeys } = require('../../src/parse/index.js');

describe('iOS parse', () => {
  it('source files to keys', async () => {
    const result = await parseSourceFilesToKeys('./tests/mocks_data', 'IOS');
    expect(result).toMatchSnapshot();
  });
});
