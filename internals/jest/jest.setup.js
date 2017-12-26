// Custom matchers and extensions
import './__matchers__/';

// Mock some modules and function
import './__mocks__';

// Integration tests here take forever :(
jest.setTimeout(50000);

// Example of a test regexp for a group of test suites
// "testRegex": "(tests/api/middleware/.+\\.js$|tests/core/mongo/.+\\.js$)",
