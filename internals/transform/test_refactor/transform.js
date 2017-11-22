// https://astexplorer.net/#/gist/baf3cd93afc1da2ee06e4243b35a0a5d/48f99b35fa593f21c256adf5bc8431e5eb5e4397
const transform = (ast, j) => {
  // before( -> beforeAll(
  ast.find(j.Identifier, { name: 'before' }).forEach((d) => {
    d.value.name = 'beforeAll';
  });

  // Remove co import
  ast.find(j.ImportDeclaration, { source: { value: 'co' } }).replaceWith(() => null);

  // Generators to async
  ast
    .find(j.ArrowFunctionExpression)
    .filter(d => d.value.body.type === 'CallExpression')
    .forEach((d) => {
      const innerBlock = d.value.body.arguments[0].body;
      d.value.body = innerBlock;
      d.value.async = true;
    });

  // Replace yield with await
  ast.find(j.YieldExpression).forEach((d) => {
    const arg = d.value.argument;
    const awaitExp = j.awaitStatement(arg).expression;
    // console.log(awaitExp);
    // console.log(d.value);
    d.value = awaitExp;
  });

  // yield -> await
  const source = ast.toSource().replace(/yield/g, 'await');
  ast = j(source);

  return ast;
};

module.exports = transform;
