const { MongoClient, Server, Db } = require('mongodb');
const { MOCK_DB_PREFIX } = require('./changeDatabaseName');

const DEFAULT_HOST = '127.0.0.1';
const DEFAULT_PORT = 27017;

const server = new Server(DEFAULT_HOST, 27017);
const url = `mongodb://localhost:${DEFAULT_PORT}/`;

const dropAllMockDbs = () => new Promise((resolve, reject) =>
  MongoClient.connect(url, (err, db) => {
    if (err) {
      return reject(err);
    }
    console.log('Starting test database cleanup...');
    return db.admin().listDatabases()
      .then(dbs => dbs.databases.filter(({ name }) => name.indexOf(MOCK_DB_PREFIX) === 0))
      .then(mockDatabases => Promise.all(mockDatabases
        .map(mockDb => new Db(mockDb.name, server, {}))
        .map(mockDbInstance => new Promise((resolve, reject) => {
          mockDbInstance.open((err, client) => {
            if (err) {
              return reject(err);
            }
            client.dropDatabase((err, result) => {
              if (err) {
                client.close();
                reject(err);
              } else {
                client.close();
                resolve(result);
              }
            });
          });
        }))
      ))
      // .then((res) => console.log('Done', res))
      // .catch(err => console.error(err))
      .then(() => db.close())
      .then(() => resolve())
  })
);

dropAllMockDbs()
  .catch(err => console.error(err))
  .then(() => console.log('✅ Cleaned up test databases.'))
  .then(() => process.exit(0));
