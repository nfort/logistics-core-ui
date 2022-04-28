module.exports = {
  stories: ["../stories/**/Main.stories.mdx", "../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
    "@storybook/addon-essentials",
  ],
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  refs: {
    "holism-formik": {
      title: "Holism Formik wrappers",
      url: "https://62014ff5ccb1b0003a711714-amdiuoldtz.chromatic.com/",
      expanded: false, // optional, true by default
    },
    "holism-ui": {
      title: "Holism Ui",
      url: "https://62206da496d935003a99e04c-yvzxmqoaud.chromatic.com/",
      expanded: false, // optional, true by default
    },
  },
};
