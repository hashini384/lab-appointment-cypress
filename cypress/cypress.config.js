const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'D:/Hash/lab-appointment-cypress/cypress/cypress/e2e/spec.cy.js',
    testIsolation: false,
    baseUrl: 'http://localhost:4200',
    setupNodeEvents(on, config) {

    },
  },
});
