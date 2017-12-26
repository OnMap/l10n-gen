import expect from 'expect';

expect.extend({
  toHaveKeys(object, keys) {
    let pass = null;
    let error = null;
    try {
      expect(Object.keys(object).sort()).toEqual(keys.sort());
      pass = true;
    } catch (err) {
      pass = false;
      error = err;
    }

    const message = pass ? 'Passed object has all keys' : error.message;

    return {
      message: () => (message),
      pass
    };
  }
});
