const { defineConfig } = require("cypress");
const eyesPlugin = require('@applitools/eyes-cypress')

module.exports = eyesPlugin(defineConfig({
  viewportWidth: 1000,
  viewportHeight: 660,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5173'
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
}));

