import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    // Retorna false para impedir que o Cypress falhe no teste
    return false;
});