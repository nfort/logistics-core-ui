import styled, { css } from "styled-components";

export const FlexInline = styled("div")<{ gap: boolean }>`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;

  ${({ gap = false }) =>
    gap &&
    css`
      gap: 1.5rem;
    `}
`;
