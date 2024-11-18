import 'cypress-file-upload';
import 'cypress-wait-until';

Cypress.Commands.add('stubWindowOpen', () => {
  cy.window().then((win) => {
    cy.stub(win, 'open').as('windowOpen'); // Define o alias como 'windowOpen'
  });
});

Cypress.Commands.add('validateWindowContent', (expectedMessage) => {
  cy.get('@windowOpen').should('have.been.calledOnce'); // Garante que o método open foi chamado
  cy.get('@windowOpen').then((stub) => {
    const newWindowUrl = stub.getCall(0).args[0]; // Captura a URL da nova janela
    cy.visit(newWindowUrl); // Visita a nova janela
    cy.contains(expectedMessage).should('be.visible'); // Valida o conteúdo esperado
  });
});