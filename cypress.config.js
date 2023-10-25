const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: 'http://localhost:1234',
    specPattern:"cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
})