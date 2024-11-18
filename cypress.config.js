const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 20000,
    chromeWebSecurity: false,
    "reporter": "cypress-mochawesome-reporter",
    "reporterOptions": {
      "charts": true,
      "reportDir": "cypress/reports",
      "overwrite": false,
      "html": true,
      "json": false
    }
  },
});
