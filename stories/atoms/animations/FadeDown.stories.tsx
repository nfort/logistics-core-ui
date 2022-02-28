import * as React from "react";
import { Content, LoadingContainer, useToggle } from "../../../src";
import { FadeDown } from "../../../src";
import { ComponentMeta } from "@storybook/react";
import { Button } from "@holism/components";

const meta = {
  title: "atoms/animations/FadeDown",
  component: FadeDown,
} as ComponentMeta<typeof FadeDown>;

export default meta;

export const Default = () => {
  const [open, toogle] = useToggle();
  return (
    <Content>
      <Content.Header>
        <Button dimension="medium" color="primary" type="button" onClick={toogle}>
          Показать анимацию
        </Button>
      </Content.Header>
      <div>
        <FadeDown in={open}>
          <LoadingContainer loading={true}>
            <div style={{ height: "500px" }} />
          </LoadingContainer>
        </FadeDown>
      </div>
    </Content>
  );
};
