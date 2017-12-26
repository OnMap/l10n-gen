import axios from 'axios';

const { parseltongueHost } = require('../constants');

const uploadKeys = async (keys = [], appId = '', token = '', host = parseltongueHost.prod) => {
//   if (!data.topic_id) {
//     throw new BadRequestError('Topic is not defined. Check your app config');
//   }
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  const url = `${host}/v1/keys`;
  console.log('url', url);
  return new Promise((resolve, reject) =>
    axios
      .post(url, {
        data: {
          app_id: appId,
          names: keys
        },
        headers: {
          access_token: token
        }
      })
      .then((response) => {
        if (response && response.data) {
          // logger.info(
          //   response.data
          // );
          resolve(response.data);
        } else {
          throw new Error();
        }
      })
      .catch(err =>
        reject(new Error(err || 'Could not upload keys'))
      )
  );
};

module.exports = {
  uploadKeys
};
