const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://demoqa.com/', // URL do projeto
    reporter: 'cypress-mochawesome-reporter',
    chromeWebSecurity: false, // Desabilita a verificação de segurança
    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome', // Define o diretório de saída
      overwrite: false,
      html: true,
      json: true,
      timestamp: 'mmddyyyy_HHMMss', // Adiciona timestamps aos relatórios
    },
  },
});
