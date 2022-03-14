import styled, { css } from "styled-components";

export const FormField = styled("div")<{ marginBottom?: string; height?: string }>`
  margin-bottom: ${({ marginBottom = "1rem" }) => marginBottom};
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
`;
