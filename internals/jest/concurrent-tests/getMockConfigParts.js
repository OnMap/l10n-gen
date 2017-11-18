
const getFreePort = require('./getFreePort');
const { changeDatabaseName } = require('./changeDatabaseName');

function getMockConfigParts(config) {
  const appName = `${config.appName} Mocked`;
  const apiPort = getFreePort();
  const connectionString = changeDatabaseName(config.connectionString);

  // console.log('Mocked config vars for tests concurrency:', { appName, apiPort, connectionString });

  return {
    apiPort,
    appName,
    connectionString
  };
}

module.exports = getMockConfigParts;
