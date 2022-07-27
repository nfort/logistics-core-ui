import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Content } from "../../src/atoms/Content";
import { WithPrefetch } from "../../src/hocs/WithPrefetch";
import { QueryClient, QueryClientProvider } from "react-query";
import { Paragraph } from "@nfort/holism-ui";

const queryClient = new QueryClient();

const fetchOne = () => queryClient.prefetchQuery("key-one", async () => await new Promise((r) => setTimeout(r, 2000)));

const meta = {
  title: "hocs/WithPrefetch",
  component: WithPrefetch,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
} as ComponentMeta<typeof WithPrefetch>;
export default meta;

const Template: ComponentStory<typeof WithPrefetch> = (args) => <WithPrefetch {...args} />;

export const Default = Template.bind({});
Default.args = {
  height: "205px",
  queries: [fetchOne],
  children: (
    <Content>
      <Paragraph>
        Создавать интерактивные пользовательские интерфейсы на React — приятно и просто. Вам достаточно описать, как
        части интерфейса приложения выглядят в разных состояниях. React будет своевременно их обновлять, когда данные
        изменяются. Декларативные представления сделают код более предсказуемым и упростят отладку.
      </Paragraph>
      <div style={{ height: "20px" }} />
      <Paragraph>
        Создавайте инкапсулированные компоненты с собственным состоянием, а затем объединяйте их в сложные
        пользовательские интерфейсы. Поскольку логика компонента написана на JavaScript, а не содержится в шаблонах,
        можно с лёгкостью передавать самые разные данные по всему приложению и держать состояние вне DOM.
      </Paragraph>
    </Content>
  ),
};
