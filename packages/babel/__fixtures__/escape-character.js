import { styled } from '@exodus/linaria-react';

const selectors = ['a', 'b'];

export const Block = styled.div`
  ${selectors.map((c) => String.raw`${c} { content: "\u000A"; }`).join('\n')};
`;
