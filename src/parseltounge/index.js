// import axios from 'axios';

const { parseltongueHost } = require('../constants');

const uploadKeys = async (keys = [], appKey = '', token = '', devType = 'dev') => {
//   if (!data.topic_id) {
//     throw new BadRequestError('Topic is not defined. Check your app config');
//   }
  const url = `${parseltongueHost[devType]}/v1/keys`;
  console.log(url);
  // return new Promise((resolve, reject) =>
  //   axios
  //     .post(url, keys, {
  //       headers: { access_token: token, app_id: appKey  }
  //     })
  //     .then(response => resolve(response.data))
  //     .catch(err =>
  //       reject(new Error(err.message ? err.message : 'Could not subscribe user to topic'))
  //     )
  // );
};

module.exports = {
  uploadKeys
};
