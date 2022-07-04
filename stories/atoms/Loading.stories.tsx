import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Loading } from "../../src";

const meta = {
  title: "atoms/Loading",
  component: Loading,
} as ComponentMeta<typeof Loading>;

export default meta;

const Template: ComponentStory<typeof Loading> = (args) => <Loading {...args} />;

export const Default = Template.bind({});
