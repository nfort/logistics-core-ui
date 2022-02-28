import React from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";
import { useRef } from "react";
import styled from "styled-components";
import { TransitionStatus } from "react-transition-group/Transition";

const FADE_TIMEOUT = 250;

export function FadeDown(props: Partial<CSSTransitionProps>) {
  const nodeRef = useRef(null);
  return (
    <CSSTransition {...props} timeout={FADE_TIMEOUT} nodeRef={nodeRef}>
      {(state) => (
        <FadeDownAnimation state={state} ref={nodeRef}>
          {props.children}
        </FadeDownAnimation>
      )}
    </CSSTransition>
  );
}

const FadeDownAnimation = styled.div<{ state: TransitionStatus }>`
  transition: all 0.25s ease-in-out;
  overflow: hidden;
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
  max-height: ${({ state }) => (state === "entered" ? "1200px" : 0)};
`;
