import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const { uploadKeys } = require('../../src/parseltounge');

describe('Update Keys', () => {
  const apiVersion = 'v1';
  const host = 'https://dev-parseltongue.onmap.co.il';
  const route = `${host}/${apiVersion}/keys`;

  const header = {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWRtaW4iLCJ1c2VyX2lkIjoicnl2ajltSEVlIiwiY3JlYXRlZCI6MTUxMzg3MTgxMDg4OSwianRpIjoiSDFqYUtVRk1HIiwiaWF0IjoxNTEzODcxODEwLCJleHAiOjE1MTY0NjM4MTAsImlzcyI6Ik9uTWFwIExURCJ9.3G4-ie3BFbzhYUxeS9KFUddQk3y_qzWGRzPUFC6CgL8'
  };

  const body = {
    appId: 'eca59a39-ca2e-4d22-80b3-18e0b5a8f741',
    keys: ['testKey1', 'testKey2']
  };

  const stubCaptchaData = (data, reject = false) =>
    Promise[reject ? 'reject' : 'resolve']({ data });

  it('upload all keys', () => {
    // const mock = new MockAdapter(axios);
    // const data = { response: {} };
    // mock.onGet(route).reply(200, data);
    // console.log(route);

    uploadKeys(body.keys, body.appId, header.token, host).then((response) => {
      console.log(response);
      // expect(response).toMatchSnapshot();
    }).catch((error) => {
      console.log('error 123123', error);
      // assert.isNotOk(error,'Promise error');
      // done();
    });
  });
});

