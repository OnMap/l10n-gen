
const mockJob = {
  attrs: { name: 'jest-mocked', data: null },
  repeatEvery: (time, { timezone }) => {},
  computeNextRunAt: () => {},
  save: cb => cb(null, {})
};

jest.mock('agenda', () => class Agenda {
  constructor() {
    jest.mock('agendash', () => (req, res, next) => next())
  }
  on = (cmd, cb) => {
    switch (cmd) {
      case 'ready':
        return cb();
      case 'error':
        return;

      default:
        throw new Error('Unknown command in mock: ' + cmd);
    }
  }
  _indices = [];
  // For Agendash
  _collection = { createIndexes() {} };
  _mdb = { admin(){ return ({ serverInfo(){} }) } };
  start = () => {}
  stop = () => {}
  define = () => {}
  create = () => mockJob
  purge = () => {}
  jobs = (query, cb) => cb(null, [])
  cancel = (params, cb) => cb(null, 0)
  schedule = (when, name, data, cb) => cb(null, mockJob)
  every = (when, name, data, cb) => cb(null, { attrs: { name: 'jest-interval-mocked', data: null } })
});

// jest.mock('agendash', () => class Agendash {});
