import axios from 'axios';
import { uploadKeys } from '../../src/parseltounge/updateKeys';

describe('Update Keys', () => {
  const testingHost = 'https://dev-parseltongue.onmap.co.il';
  const request = {
    token: 'token',
    appId: 'eca59a39-ca2e-4d22-80b3-18e0b5a8f741',
    keys: ['testKey1', 'testKey2']
  }

  it('upload all keys', async () => {
    axios.post = jest.fn(() => Promise.resolve({ data: 'OK' }));
    expect(uploadKeys(request.keys, request.appId, request.token, testingHost)).resolves.toMatchSnapshot();
    axios.post.mockRestore();
  });

  it('handles empty response', async () => {
    axios.post = jest.fn(() => Promise.resolve({ data: '' }));
    expect(uploadKeys(request.keys, request.appId, request.token, testingHost)).rejects.toMatchSnapshot();
    axios.post.mockRestore();
  });

  it('handles error on request', async () => {
    axios.post = jest.fn(() => Promise.reject({ response: { data: { message: 'not-ok' } } }));
    expect(uploadKeys(request.keys, request.appId, request.token, testingHost)).rejects.toMatchSnapshot();
    axios.post.mockRestore();
  });

});

