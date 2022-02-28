import {Paragraph} from "@holism/components";
import React, {PropsWithChildren} from "react";
import styled from "styled-components";

export function Field({label, children}: PropsWithChildren<{ label: string }>) {
  return <Styled>
    <label><Paragraph size={15} lineHeight={20} fontWeight="bold">{label}</Paragraph></label>
    <div>{children}</div>
  </Styled>
}

const Styled = styled.div`
  > label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }
`
