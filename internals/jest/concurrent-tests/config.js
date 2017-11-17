const isRunConcurrently = command =>
  command.indexOf('-i') === -1 &&
  command.indexOf('--runInBand') === -1;

const jestCommand = process.argv.slice(2).join(' ');

if (isRunConcurrently(jestCommand)) {
  // HACK: Not a mock, actual config, name is to avoid jest error
  const mockConfig = require('../../../src/config');
  const mockConfigParts = require('./getMockConfigParts.js');

  // Prevent jest hoisting
  const mockTheVars = () => {
    jest.mock('../../../src/config', () => ({
      ...mockConfig,
      ...mockConfigParts(mockConfig)
    }));
  }

  mockTheVars();
}
