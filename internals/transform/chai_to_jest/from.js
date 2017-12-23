describe('Test transform', () => {
  it('equality - from', () => {
    assert.deepEqual({ a: 1 }, { b: 2 });
    assert.deepEqual({ c: 3 }, { d: 4 }, 'msg');
    assert.equal('e', 'f');
    assert.equal('g', 'h', 'msg');
    assert.notEqual(a, b, 'msg');
  });

  it('equality - to', () => {
    expect({ a: 1 }).toEqual({ b: 2 });
    expect({ c: 3 }).toEqual({ d: 4 }, 'msg');
    expect('e').toBe('f');
    expect('g').toBe('h', 'msg');
    expect(a).not.toBe(b, 'msg');
  });

  it('instances - from', () => {
    assert.isArray([]);
    assert.isObject({}, 'msg');
  });

  it('instances - to', () => {
    expect([]).toBeInstanceOf(Array);
    expect({}).toBeInstanceOf(Object, 'msg');
  });

  it('booleans - from', () => {
    assert.isTrue(true);
    assert.isFalse(false, 'msg');
    assert.isOk(false);
    assert.isNotOk(false);
    assert.isUndefined(true);
    assert.isNull({});
    assert.isNotNull({});
  });

  it('booleans - to', () => {
    expect(true).toBe(true);
    expect(false).toBe(false, 'msg');
    expect(false).toBeTruthy();
    expect(false).toBeFalsy();
    expect(false).toBeUndefined();
    expect({}).toBeNull();
    expect({}).not.toBeNull();
  });

  it('numbers - from', () => {
    assert.isAbove(1, 2);
    assert.isAbove(3, 4, msg);
    assert.isBelow(5, 6);
    assert.isBelow(7, 8, msg);
  });

  it('numbers - to', () => {
    expect(1).toBeGreaterThan(2);
    expect(3).toBeGreaterThan(4, 'msg');
    expect(5).toBeLessThan(6);
    expect(7).toBeLessThan(8, 'msg');
  });

  it('throws - from', () => {
    assert.throws(() => func('param'), 'Error');
  });

  it('throws - to', () => {
    expect(() => func('param')).toThrow('Error');
  });
});
