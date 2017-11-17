module.exports = (ast, j) => {
  const source = ast
    .toSource()
    .replace(/yield/g, 'await')
    .replace('*', 'async');

  ast = j(source);

  return ast;
};
