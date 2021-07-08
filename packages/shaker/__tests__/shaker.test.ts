import { run } from '@exodus/linaria-babel/__utils__/strategy-tester';
import dedent from 'dedent';

describe('shaker', () => {
  run(__dirname, require('../src').default, (transpile) => {
    it('should work with wildcard imports', async () => {
      const { code, metadata } = await transpile(
        dedent`
      import { css } from "@exodus/linaria-core";
      import * as mod from "@exodus/linaria-babel/__fixtures__/complex-component";

      export const square = css\`
        ${'${mod.Title}'} {
          color: red;
        }
      \`;
    `
      );

      expect(code).toMatchSnapshot();
      expect(metadata).toMatchSnapshot();
    });

    it('should interpolate imported components', async () => {
      const { code, metadata } = await transpile(
        dedent`
      import { css } from "@exodus/linaria-core";
      import { Title } from "@exodus/linaria-babel/__fixtures__/complex-component";

      export const square = css\`
        ${'${Title}'} {
          color: red;
        }
      \`;
    `
      );

      expect(code).toMatchSnapshot();
      expect(metadata).toMatchSnapshot();
    });

    it('should interpolate imported variables', async () => {
      const { code, metadata } = await transpile(
        dedent`
      import { css } from "@exodus/linaria-core";
      import { whiteColor } from "@exodus/linaria-babel/__fixtures__/complex-component";

      export const square = css\`
        color: ${'${whiteColor}'}
      \`;
    `
      );

      expect(code).toMatchSnapshot();
      expect(metadata).toMatchSnapshot();
    });
  });
});
