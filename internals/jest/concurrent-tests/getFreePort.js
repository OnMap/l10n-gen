const findPort = require('find-port-sync');

function getFreePort() {
  // Unfortunately it needs to be syncronous, too much effort throught
  // the whole project to require config data dynamically
  return findPort();
}

module.exports = getFreePort;
