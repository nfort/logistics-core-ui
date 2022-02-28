import * as React from "react";
import { Paragraph, Button } from "@holism/components";
import { Content } from "../../src";
import { ComponentMeta } from "@storybook/react";

const meta = {
  title: "Atoms/Content",
  component: Content,
} as ComponentMeta<typeof Content>;

export default meta;

export const EmptyContent = () => <Content />;
export const WithContent = () => (
  <Content>
    <Paragraph>
      Создавайте инкапсулированные компоненты с собственным состоянием, а затем объединяйте их в сложные
      пользовательские интерфейсы. Поскольку логика компонента написана на JavaScript, а не содержится в шаблонах, можно
      с лёгкостью передавать самые разные данные по всему приложению и держать состояние вне DOM.
    </Paragraph>
  </Content>
);

export const WithHeader = () => (
  <Content>
    <Content.Header>
      <Paragraph size={22} fontWeight="bold">
        Заголовок
      </Paragraph>
    </Content.Header>
    <div>
      <Paragraph>
        Создавайте инкапсулированные компоненты с собственным состоянием, а затем объединяйте их в сложные
        пользовательские интерфейсы. Поскольку логика компонента написана на JavaScript, а не содержится в шаблонах,
        можно с лёгкостью передавать самые разные данные по всему приложению и держать состояние вне DOM
      </Paragraph>
    </div>
  </Content>
);

export const WithHeaderButton = () => (
  <Content>
    <Content.Header>
      <div>
        <Paragraph size={22} fontWeight="bold">
          Заголовок
        </Paragraph>
      </div>
      <div>
        <Button dimension="medium">Сохранить</Button>
      </div>
    </Content.Header>
    <div>
      <Paragraph>
        Создавайте инкапсулированные компоненты с собственным состоянием, а затем объединяйте их в сложные
        пользовательские интерфейсы. Поскольку логика компонента написана на JavaScript, а не содержится в шаблонах,
        можно с лёгкостью передавать самые разные данные по всему приложению и держать состояние вне DOM
      </Paragraph>
    </div>
  </Content>
);

export const WithFooter = () => (
  <Content>
    <div>
      <Paragraph>
        Создавайте инкапсулированные компоненты с собственным состоянием, а затем объединяйте их в сложные
        пользовательские интерфейсы. Поскольку логика компонента написана на JavaScript, а не содержится в шаблонах,
        можно с лёгкостью передавать самые разные данные по всему приложению и держать состояние вне DOM
      </Paragraph>
    </div>
    <Content.Footer>
      <Button dimension="medium">Сохранить</Button>
    </Content.Footer>
  </Content>
);

export const WithFooterButton = () => (
  <Content>
    <div>
      <Paragraph>
        Создавайте инкапсулированные компоненты с собственным состоянием, а затем объединяйте их в сложные
        пользовательские интерфейсы. Поскольку логика компонента написана на JavaScript, а не содержится в шаблонах,
        можно с лёгкостью передавать самые разные данные по всему приложению и держать состояние вне DOM
      </Paragraph>
    </div>
    <Content.Footer>
      <div>
        <Paragraph size={22} fontWeight="bold">
          Заголовок
        </Paragraph>
      </div>
      <div>
        <Button dimension="medium">Сохранить</Button>
      </div>
    </Content.Footer>
  </Content>
);
