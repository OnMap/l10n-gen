const { generate: getRandomString } = require('shortid');

const MOCK_DB_PREFIX = 'mock_test_db_';

const changeDatabaseName = (connectionString) => {
  const parts = connectionString.split('/').slice(0, -1);
  parts.push(`${MOCK_DB_PREFIX + process.pid}_${getRandomString()}`);
  return parts.join('/');
};

module.exports = {
  changeDatabaseName,
  MOCK_DB_PREFIX
};
