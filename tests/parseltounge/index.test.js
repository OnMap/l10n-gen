import axios from 'axios';
import { uploadKeys } from '../../src/parseltounge';

describe('Update Keys', () => {
  const host = 'https://dev-parseltongue.onmap.co.il';

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWRtaW4iLCJ1c2VyX2lkIjoicnl2ajltSEVlIiwiY3JlYXRlZCI6MTUxMzg3MTgxMDg4OSwianRpIjoiSDFqYUtVRk1HIiwiaWF0IjoxNTEzODcxODEwLCJleHAiOjE1MTY0NjM4MTAsImlzcyI6Ik9uTWFwIExURCJ9.3G4-ie3BFbzhYUxeS9KFUddQk3y_qzWGRzPUFC6CgL8';

  const body = {
    appId: 'eca59a39-ca2e-4d22-80b3-18e0b5a8f741',
    keys: ['testKey1', 'testKey2']
  };

  it('upload all keys', async () => {
    axios.post = jest.fn(() => Promise.resolve({ data: 'OK' }));
    const response = await uploadKeys(body.keys, body.appId, token, host);
    axios.post.mockRestore();

    expect(response).toBe('OK');
  });
});

