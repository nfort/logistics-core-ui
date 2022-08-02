import "@nfort/holism-ui/assets/fonts.css";
import { GlobalStyle } from "@nfort/holism-ui/assets/normalize";
import { DefaultTheme, ThemeProvider } from "@nfort/holism-ui";

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: "^on.*" },
  controls: { expanded: true },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
