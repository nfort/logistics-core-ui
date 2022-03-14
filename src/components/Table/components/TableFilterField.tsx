import { Paragraph } from "@holism/components";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export function TableFilterField({ label, children }: PropsWithChildren<{ label: string }>) {
  return (
    <>
      <Label>
        <Paragraph size={15} lineHeight={20} fontWeight="bold">
          {label}
        </Paragraph>
      </Label>
      <div>{children}</div>
    </>
  );
}

const Label = styled.div`
  display: inline-block;
  margin-bottom: 0.5rem;
`;
