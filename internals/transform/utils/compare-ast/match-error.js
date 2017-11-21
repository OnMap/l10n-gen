function CompareAstError(actual, expected) {
  this.actual = actual;
  this.expected = expected;
}

const ParseError = function (...args) {
  CompareAstError.apply(this, args);
};
ParseError.prototype = Object.create(CompareAstError.prototype);
ParseError.prototype.code = 1;
ParseError.prototype.message = 'Parse error';

const BindingError = function (...args) {
  CompareAstError.apply(this, args);
};
BindingError.prototype = Object.create(CompareAstError.prototype);
BindingError.prototype.code = 2;
BindingError.prototype.message = 'Re-bound variable';

const MatchError = function (...args) {
  CompareAstError.apply(this, args);
  this.showDiff = true;
};
MatchError.prototype = Object.create(CompareAstError.prototype);
MatchError.prototype.code = 3;
MatchError.prototype.message = 'Unmatched ASTs';

CompareAstError.MatchError = MatchError;
CompareAstError.BindingError = BindingError;
CompareAstError.ParseError = ParseError;

module.exports = CompareAstError;
