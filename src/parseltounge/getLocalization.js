import axios from 'axios';
import get from 'lodash/get';

const { parseltongueHost } = require('../constants');

export async function uploadKeys(
  appId,
  token,
  host = parseltongueHost.prod
) {
  if (!appId || !token) {
    throw new Error('Missing params!');
  }

  try {
    const response = await axios.post(`${host}/v1/translations`, {
        app_id: appId,
    }, {
        headers: {
        access_token: token
        }
    });

    if (response && response.data) { return response.data; }

        throw new Error('Could not upload keys');
    }

    catch (err) {
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