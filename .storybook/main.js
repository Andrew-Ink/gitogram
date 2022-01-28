module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*.stories.js",
    "../src/icons/*.stories.js"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions"
  ], 
  webpackFinal: config => {
    config.module.rules.push({
      test: /.scss$/i,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    })
    return config;
  },
  "framework": "@storybook/vue3"
}