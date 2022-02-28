import * as React from "react";
import { ComponentMeta } from "@storybook/react";
import { Content } from "../../src";
import { LoadingContainer } from "../../src";

const meta = {
  title: "Atoms/LoadingContainer",
  component: LoadingContainer,
} as ComponentMeta<typeof LoadingContainer>;

export default meta;

export const Default = () => (
  <LoadingContainer loading={true}>
    <Content height="300px" />
  </LoadingContainer>
);
