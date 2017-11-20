const transform = (ast, j) => {
  // assert.deepEqual -> expect().toEqual()
  ast
   .find(j.CallExpression, { callee: j.MemberExpression })
   .filter(d => d.value.arguments.length > 1)
   .filter(d => d.value.callee.object)
   .filter(d => d.value.callee.object.name === 'assert')
   .filter(d => d.value.callee.property.name === 'deepEqual')
   //.forEach(d => console.log(d))
   .forEach(d => {
     const args = d.value.arguments;
     const callExp = j.callExpression(
         j.identifier('expect'),
         [args[0]]
       );
     d.value.callee.object = callExp;
     d.value.callee.property = j.identifier('toEqual');
     d.value.arguments = args.slice(1);
   });

  // assert.equal -> expect().toBe()
  ast
   .find(j.CallExpression, { callee: j.MemberExpression })
   .filter(d => d.value.arguments.length > 1)
   .filter(d => d.value.callee.object)
   .filter(d => d.value.callee.object.name === 'assert')
   .filter(d => d.value.callee.property.name === 'equal')
   //.forEach(d => console.log(d))
   .forEach(d => {
     const args = d.value.arguments;
     const callExp = j.callExpression(
         j.identifier('expect'),
         [args[0]]
       );
     d.value.callee.object = callExp;
     d.value.callee.property = j.identifier('toBe');
     d.value.arguments = args.slice(1);
   });

  // assert.equal -> expect().toBe()
  ast
   .find(j.CallExpression, { callee: j.MemberExpression })
   .filter(d => d.value.arguments.length > 1)
   .filter(d => d.value.callee.object)
   .filter(d => d.value.callee.object.name === 'assert')
   .filter(d => d.value.callee.property.name === 'notEqual')
   //.forEach(d => console.log(d))
   .forEach(d => {
     const args = d.value.arguments;
     const callExp = j.callExpression(
         j.identifier('expect'),
         [args[0]]
       );
     d.value.callee.object = callExp;
     d.value.callee.property = j.identifier('not.toBe');
     d.value.arguments = args.slice(1);
   });

  // assert.isArray -> expect().toBeInstanceOf(Array)
  ast
   .find(j.CallExpression, { callee: j.MemberExpression })
   .filter(d => d.value.arguments.length > 0)
   .filter(d => d.value.callee.object)
   .filter(d => d.value.callee.object.name === 'assert')
   .filter(d => d.value.callee.property.name === 'isArray')
   //.forEach(d => console.log(d))
   .forEach(d => {
     const args = d.value.arguments;
     const callExp = j.callExpression(
         j.identifier('expect'),
         [args[0]]
       );
     d.value.callee.object = callExp;
     d.value.callee.property = j.identifier('toBeInstanceOf');
     d.value.arguments = ['Array'];
       if (args[1]) {
         d.value.arguments.push(args[1]);
       }
   });

  // assert.isObject -> expect().toBeInstanceOf(Object)
  ast
   .find(j.CallExpression, { callee: j.MemberExpression })
   .filter(d => d.value.arguments.length > 0)
   .filter(d => d.value.callee.object)
   .filter(d => d.value.callee.object.name === 'assert')
   .filter(d => d.value.callee.property.name === 'isObject')
   //.forEach(d => console.log(d))
   .forEach(d => {
     const args = d.value.arguments;
     const callExp = j.callExpression(
         j.identifier('expect'),
         [args[0]]
       );
     d.value.callee.object = callExp;
     d.value.callee.property = j.identifier('toBeInstanceOf');
     d.value.arguments = ['Object'];
       if (args[1]) {
         d.value.arguments.push(args[1]);
       }
   });

  // assert.isTrue -> expect().toBe(true)
  ast
   .find(j.CallExpression, { callee: j.MemberExpression })
   .filter(d => d.value.arguments.length > 0)
   .filter(d => d.value.callee.object)
   .filter(d => d.value.callee.object.name === 'assert')
   .filter(d => d.value.callee.property.name === 'isTrue')
   //.forEach(d => console.log(d))
   .forEach(d => {
     const args = d.value.arguments;
     const callExp = j.callExpression(
         j.identifier('expect'),
         [args[0]]
       );
     d.value.callee.object = callExp;
     d.value.callee.property = j.identifier('toBe');
     d.value.arguments = ['true'];
       if (args[1]) {
         d.value.arguments.push(args[1]);
       }
   });

  // assert.isFalse -> expect().toBe(false)
  ast
   .find(j.CallExpression, { callee: j.MemberExpression })
   .filter(d => d.value.arguments.length > 0)
   .filter(d => d.value.callee.object)
   .filter(d => d.value.callee.object.name === 'assert')
   .filter(d => d.value.callee.property.name === 'isFalse')
   //.forEach(d => console.log(d))
   .forEach(d => {
     const args = d.value.arguments;
     const callExp = j.callExpression(
         j.identifier('expect'),
         [args[0]]
       );
     d.value.callee.object = callExp;
     d.value.callee.property = j.identifier('toBe');
     d.value.arguments = ['false'];
       if (args[1]) {
         d.value.arguments.push(args[1]);
       }
   });

  // assert.isOk -> expect().toBeTruthy()
  ast
   .find(j.CallExpression, { callee: j.MemberExpression })
   .filter(d => d.value.arguments.length > 0)
   .filter(d => d.value.callee.object)
   .filter(d => d.value.callee.object.name === 'assert')
   .filter(d => d.value.callee.property.name === 'isOk')
   //.forEach(d => console.log(d))
   .forEach(d => {
     const args = d.value.arguments;
     const callExp = j.callExpression(
         j.identifier('expect'),
         [args[0]]
       );
     d.value.callee.object = callExp;
     d.value.callee.property = j.identifier('toBeTruthy');
     d.value.arguments = [];
   });

  // assert.isNotOk -> expect().toBeFalsy()
  ast
   .find(j.CallExpression, { callee: j.MemberExpression })
   .filter(d => d.value.arguments.length > 0)
   .filter(d => d.value.callee.object)
   .filter(d => d.value.callee.object.name === 'assert')
   .filter(d => d.value.callee.property.name === 'isNotOk')
   //.forEach(d => console.log(d))
   .forEach(d => {
     const args = d.value.arguments;
     const callExp = j.callExpression(
         j.identifier('expect'),
         [args[0]]
       );
     d.value.callee.object = callExp;
     d.value.callee.property = j.identifier('toBeFalsy');
     d.value.arguments = [];
   });

  // assert.isUndefined -> expect().toBeUndefined()
  ast
   .find(j.CallExpression, { callee: j.MemberExpression })
   .filter(d => d.value.arguments.length > 0)
   .filter(d => d.value.callee.object)
   .filter(d => d.value.callee.object.name === 'assert')
   .filter(d => d.value.callee.property.name === 'isUndefined')
   //.forEach(d => console.log(d))
   .forEach(d => {
     const args = d.value.arguments;
     const callExp = j.callExpression(
         j.identifier('expect'),
         [args[0]]
       );
     d.value.callee.object = callExp;
     d.value.callee.property = j.identifier('toBeUndefined');
     d.value.arguments = [];
   });

  // assert.isNull -> expect().toBeNull()
  ast
   .find(j.CallExpression, { callee: j.MemberExpression })
   .filter(d => d.value.arguments.length > 0)
   .filter(d => d.value.callee.object)
   .filter(d => d.value.callee.object.name === 'assert')
   .filter(d => d.value.callee.property.name === 'isNull')
   //.forEach(d => console.log(d))
   .forEach(d => {
     const args = d.value.arguments;
     const callExp = j.callExpression(
         j.identifier('expect'),
         [args[0]]
       );
     d.value.callee.object = callExp;
     d.value.callee.property = j.identifier('toBeNull');
     d.value.arguments = [];
   });

  // assert.isNotNull -> expect().not.toBeNull()
  ast
   .find(j.CallExpression, { callee: j.MemberExpression })
   .filter(d => d.value.arguments.length > 0)
   .filter(d => d.value.callee.object)
   .filter(d => d.value.callee.object.name === 'assert')
   .filter(d => d.value.callee.property.name === 'isNotNull')
   //.forEach(d => console.log(d))
   .forEach(d => {
     const args = d.value.arguments;
     const callExp = j.callExpression(
         j.identifier('expect'),
         [args[0]]
       );
     d.value.callee.object = callExp;
     d.value.callee.property = j.identifier('not.toBeNull');
     d.value.arguments = [];
   });

  // assert.isAbove -> expect().toBeGreaterThan()
  ast
   .find(j.CallExpression, { callee: j.MemberExpression })
   .filter(d => d.value.arguments.length > 1)
   .filter(d => d.value.callee.object)
   .filter(d => d.value.callee.object.name === 'assert')
   .filter(d => d.value.callee.property.name === 'isAbove')
   //.forEach(d => console.log(d))
   .forEach(d => {
     const args = d.value.arguments;
     const callExp = j.callExpression(
         j.identifier('expect'),
         [args[0]]
       );
     d.value.callee.object = callExp;
     d.value.callee.property = j.identifier('toBeGreaterThan');
     d.value.arguments = args.slice(1);
   });

  // assert.isBelow -> expect().toBeLessThan()
  ast
   .find(j.CallExpression, { callee: j.MemberExpression })
   .filter(d => d.value.arguments.length > 1)
   .filter(d => d.value.callee.object)
   .filter(d => d.value.callee.object.name === 'assert')
   .filter(d => d.value.callee.property.name === 'isBelow')
   //.forEach(d => console.log(d))
   .forEach(d => {
     const args = d.value.arguments;
     const callExp = j.callExpression(
         j.identifier('expect'),
         [args[0]]
       );
     d.value.callee.object = callExp;
     d.value.callee.property = j.identifier('toBeLessThan');
     d.value.arguments = args.slice(1);
   });

  // assert.throws -> expect().toThrow()
  ast
   .find(j.CallExpression, { callee: j.MemberExpression })
   .filter(d => d.value.arguments.length > 1)
   .filter(d => d.value.callee.object)
   .filter(d => d.value.callee.object.name === 'assert')
   .filter(d => d.value.callee.property.name === 'throws')
   //.forEach(d => console.log(d))
   .forEach(d => {
     const args = d.value.arguments;
     const callExp = j.callExpression(
         j.identifier('expect'),
         [args[0]]
       );
     d.value.callee.object = callExp;
     d.value.callee.property = j.identifier('toThrow');
     d.value.arguments = args.slice(1);
   });
};

// TODO: Replace 44 other usages of assert
// isNumber -> .toBeInstanceOf(Number);
// isString
// isAtMost
// isAtLeast
// hasAllKeys

module.exports = transform;
