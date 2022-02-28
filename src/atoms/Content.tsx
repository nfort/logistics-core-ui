import styled, { css } from "styled-components";
import { baseBorderColor, baseBorderRadius, baseBorderWidth } from "../styles/base";

const Header = styled.div`
  border-bottom: 1px solid #eee;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
`;

const Footer = styled.div`
  border-top: 1px solid #eee;
  display: flex;
  padding: 1rem;
  margin-bottom: -1rem;
  margin-left: -1rem;
  margin-right: -1rem;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled("div")<{
  height?: string;
  padding?: string;
  fillSpace?: boolean;
}>`
  ${Header} {
    margin-top: -1rem;
    margin-left: -1rem;
    margin-right: -1rem;
    margin-bottom: 1rem;

    ${({ fillSpace = false }) => {
      if (fillSpace) {
        return css`
          margin: 0;
        `;
      }
      return;
    }}
  }

  ${Footer} {
    margin-top: 1rem;
    margin-left: -1rem;
    margin-right: -1rem;
    margin-bottom: -1rem;

    ${({ fillSpace = false }) => {
      if (fillSpace) {
        return css`
          margin: 0;
        `;
      }
      return;
    }}
  }

  padding: ${({ padding = "1rem" }) => padding};
  margin-bottom: 1rem;
  border-radius: ${baseBorderRadius};
  border-width: ${baseBorderWidth};
  border-style: solid;
  border-color: ${baseBorderColor};
  height: ${({ height = "auto" }) => height};
  box-shadow: 0 5px 40px 8px rgba(230, 234, 240, 0.5);

  border-color: ${baseBorderColor};
  background-color: white;
  border-right-width: ${baseBorderWidth};
  border-left-width: ${baseBorderWidth};
`;

export const Content = Object.assign(Container, { Header, Footer });
