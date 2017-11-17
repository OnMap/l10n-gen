import co from 'co';
import omit from 'lodash/omit';
import { b, c } from './';

describe('one', () => {
  beforeAll(async () => {
    const a = await b();
    const d = 1;
    await c();
    console.log(a, d, omit({}));
  });

  it('1', async () => {
    await b();
  });
});
