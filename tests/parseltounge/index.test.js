const { uploadKeys } = require('../../src/parseltounge');

describe('Update Keys', () => {
  it('upload all keys', async () => {
    const token = 'test_token';
    const result = await uploadKeys(['testKey1', 'testKey2'], 'asd', token, 'dev');
    expect(result).toMatchSnapshot();
  });
});

