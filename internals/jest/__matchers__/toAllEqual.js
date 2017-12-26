import expect from 'expect';
import uniq from 'lodash/uniq';
import get from 'lodash/get';

expect.extend({
  toAllEqual(object, shouldBe, path) {
    let pass = null;
    let error = null;
    try {
      if (object.constructor !== Array) {
        throw new Error('Passed value must be an array');
      }

      const result = path
        ? object.map(p => get(p, path))
        : result;

      expect(uniq(result)).toEqual([shouldBe]);
      pass = true;
    } catch (err) {
      pass = false;
      error = err;
    }

    const message = pass ? `All passed values equal to ${shouldBe}` : error.message;

    return {
      message: () => (message),
      pass
    };
  }
});
