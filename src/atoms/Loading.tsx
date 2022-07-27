import * as React from "react";
import { COLORS, Loader } from "@nfort/holism-ui";
import styled from "styled-components";

type Props = {
  height: string;
};
export function Loading({ height = "auto" }: Props) {
  return (
    <LoadingDiv height={height}>
      <Loader dimension="large" color={COLORS.azure} />
    </LoadingDiv>
  );
}
const LoadingDiv = styled("div")<Pick<Props, "height">>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => height};
`;
