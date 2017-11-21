const Errors = require('../match-error');

const noop = function () {};

/**
 * Update unbound variable names in the expected AST, using the
 * previously-bound value when available.
 */
module.exports = function (options) {
  // Lookup table of bound variable names
  const boundVars = {};
  const varPattern = options.varPattern;

  if (!varPattern) {
    return noop;
  }

  return function (actual, expected) {
    let unboundName;

    if (actual.type !== 'Identifier' || expected.type !== 'Identifier') {
      return;
    }

    if (varPattern.test(expected.name)) {
      unboundName = expected.name;
      if (!(unboundName in boundVars)) {
        boundVars[unboundName] = actual.name;
      }
      expected.name = boundVars[unboundName];

      // This inequality would be caught by the next recursion, but it is
      // asserted here to provide a more specific error--the ASTs do not
      // match because a variable was re-bound.
      if (expected.name !== actual.name) {
        return new Errors.BindingError(actual.name, expected.name);
      }
      return true;
    }
  };
};
