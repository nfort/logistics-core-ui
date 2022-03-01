import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FlexInline } from "../../src/atoms/FlexInline";

const meta = {
  title: "atoms/FlexInline",
  component: FlexInline,
} as ComponentMeta<typeof FlexInline>;

export default meta;

const Template: ComponentStory<typeof FlexInline> = (args) => <FlexInline {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <div style={{ backgroundColor: "aquamarine", padding: "1rem", color: "rgb(31, 45, 61)" }}>Hello</div>
      <div style={{ backgroundColor: "cadetblue", padding: "1rem", color: "rgb(31, 45, 61)" }}>World</div>
      <div style={{ backgroundColor: "crimson", padding: "1rem", color: "white" }}>Here</div>
    </>
  ),
};

export const WithGap = Template.bind({});
WithGap.args = {
  ...Default.args,
  gap: true,
};
