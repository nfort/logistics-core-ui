import React, { PropsWithChildren } from "react";
import { COLORS, Loader } from "@holism/components";
import styled from "styled-components";
import { baseBorderRadius } from "../styles/base";

interface LoadingBlockProps {
  loading: boolean;
}

export function LoadingContainer({ loading, children }: PropsWithChildren<LoadingBlockProps>) {
  if (loading) {
    return (
      <LoadingDiv>
        <div className="loading-wrapper" />
        <div className="loading">
          <Loader dimension="large" color={COLORS.azure} />
        </div>
        {children}
      </LoadingDiv>
    );
  }
  return <>{children}</>;
}

const LoadingDiv = styled.div`
  position: relative;

  .loading-wrapper {
    border-radius: ${baseBorderRadius};
    background-color: ${COLORS.asphalt};
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    opacity: 0.25;
  }

  .loading {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 2;
    justify-content: center;
    align-items: center;
  }
`;
