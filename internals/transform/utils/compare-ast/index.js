// Taken from https://github.com/jugglinmike/compare-ast

const parseModule = require('esprima').parseModule;
const Errors = require('./match-error');
const normalizeMemberExpr = require('./util/normalize-member-expr');
const fuzzyIdentifiers = require('./comparators/fuzzy-identifiers');
const fuzzyStrings = require('./comparators/fuzzy-strings');

const checkEquivalency = function (comparators, actual, expected) {
  const result = comparators
    .map(comparator => comparator(actual, expected))
    .reduce((prev, current) => {
      if (current === true) {
        return true;
      }
      return prev || current;
    }, null);

  if (result instanceof Errors) {
    throw result;
  } else if (result === true) {
    return true;
  }
};

function compareAst(actualSrc, expectedSrc, options) {
  let actualAst;
  let expectedAst;
  options = options || {};

  if (!options.comparators) {
    options.comparators = [];
  }

  Array.prototype.push.apply(options.comparators, [
    fuzzyIdentifiers(options),
    fuzzyStrings(options)
  ]);

  try {
    actualAst = parseModule(actualSrc).body;
  } catch (err) {
    throw new Errors.ParseError();
  }

  try {
    expectedAst = parseModule(expectedSrc).body;
  } catch (err) {
    throw new Errors.ParseError();
  }

  function _bind(actual, expected) {
    let attr;

    // Literal values
    if (Object(actual) !== actual) {
      if (actual !== expected) {
        throw new Errors.MatchError(actualAst, expectedAst);
      }
      return;
    }

    // Arrays
    if (Array.isArray(actual)) {
      if (actual.length !== expected.length) {
        throw new Errors.MatchError(actualAst, expectedAst);
      }
      actual.forEach((_, i) => {
        _bind(actual[i], expected[i]);
      });
      return;
    }

    // Nodes

    normalizeMemberExpr(actual);
    normalizeMemberExpr(expected);

    if (checkEquivalency(options.comparators, actual, expected)) {
      return;
    }

    // Either remove attributes or recurse on their values
    for (attr in actual) {
      if (expected && attr in expected) {
        _bind(actual[attr], expected[attr]);
      } else {
        throw new Errors.MatchError(actualAst, expectedAst);
      }
    }
  }

  // Start recursing on the ASTs from the top level.
  _bind(actualAst, expectedAst);

  return null;
}

compareAst.Error = Errors;

module.exports = (source1, source2, options) => {
  try {
    compareAst(source1, source2, options);
  } catch (err) {
    return err;
  }
  return null;
};
