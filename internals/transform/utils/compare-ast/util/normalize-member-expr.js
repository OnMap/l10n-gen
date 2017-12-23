module.exports = function (node) {
  if (node.type !== 'MemberExpression' || node.property.type !== 'Identifier') {
    return;
  }

  // When the actual property is an Identifier, compare its literal
  // representation against the expected property.
  node.computed = true;
  const name = node.property.name;
  node.property = {
    type: 'Literal',
    value: name
  };
};
