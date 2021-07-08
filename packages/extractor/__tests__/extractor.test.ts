import { run } from '@exodus/linaria-babel/__utils__/strategy-tester';

describe('extractor', () => {
  run(__dirname, require('../src').default);
});
