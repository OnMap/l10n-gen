import co from 'co';
import omit from 'lodash/omit';
import { b, c } from './';

describe('one', () => {
  beforeAll(() =>
    co(function* () {
      const a = yield b();
      const d = 1;
      yield c();
      console.log(a, d, omit({}));
    }));

  it('1', () =>
    co(function* () {
      yield b();
    }));
});
