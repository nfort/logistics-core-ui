import "normalize.css";
import "@holism/components/assets/fonts.css";
import { DefaultTheme, ThemeProvider } from "@holism/components";

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: "^on.*" },
  controls: { expanded: true },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={DefaultTheme}>
      <Story />
    </ThemeProvider>
  ),
];
