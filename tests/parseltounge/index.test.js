import axios from 'axios';
import { uploadKeys } from '../../src/parseltounge';

describe('Update Keys', () => {
  const testingHost = 'https://dev-parseltongue.onmap.co.il';
  const testingToken = 'token';

  const body = {
    appId: 'eca59a39-ca2e-4d22-80b3-18e0b5a8f741',
    keys: ['testKey1', 'testKey2']
  };

  it('upload all keys', async () => {
    axios.post = jest.fn(() => Promise.resolve({ data: 'OK' }));
    const response = await uploadKeys(body.keys, body.appId, testingToken, testingHost);
    axios.post.mockRestore();

    expect(response).toBe('OK');
  });
});

