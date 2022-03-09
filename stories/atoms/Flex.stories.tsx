import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Flex } from "../../src";

const meta = {
  title: "atoms/Flex",
  component: Flex,
} as ComponentMeta<typeof Flex>;

export default meta;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <div style={{ backgroundColor: "aquamarine", padding: "1rem", color: "rgb(31, 45, 61)" }}>Hello</div>
      <div style={{ backgroundColor: "cadetblue", padding: "2rem", color: "rgb(31, 45, 61)" }}>World</div>
      <div style={{ backgroundColor: "crimson", padding: "3rem", color: "white" }}>Here</div>
    </>
  ),
};
