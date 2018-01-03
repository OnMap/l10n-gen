import axios from 'axios';
import get from 'lodash/get';

const { parseltongueHost } = require('../constants');

export async function uploadKeys(
  keys,
  appId,
  token,
  host = parseltongueHost.prod
) {
  if (!appId || !token || !keys) {
    throw new Error('Missing params!');
  }

  try {
    const response = await axios.post(`${host}/v1/keys`, {
      app_id: appId,
      names: keys
    }, {
      headers: {
        access_token: token
      }
    });

    if (response && response.data) {
      return response.data;
    }

    throw new Error('Could not upload keys');
  } catch (err) {
    const data = get(err, 'response.data');
    if (data) {
      throw new Error(data && data.message);
    }     
    
    throw err;
  }
}

module.exports = {
    uploadKeys
}
