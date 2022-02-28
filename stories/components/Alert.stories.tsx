import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Alert } from "../../src/components/Alert";

const meta = {
  title: "components/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

export default meta;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Warning = Template.bind({});
Warning.args = {
  view: "warning",
  children: "Есть заявки, по которым не были сформированы пакеты документов",
};

export const Success = Template.bind({});
Success.args = {
  view: "success",
  children: "Есть заявки, по которым не были сформированы пакеты документов",
};
