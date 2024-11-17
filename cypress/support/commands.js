import 'cypress-file-upload';

Cypress.Commands.add('stubWindowOpen', () => {
    cy.window().then((win) => {
      cy.stub(win, 'open').callsFake((url) => {
        win.location.href = url;
      }).as('newWindow');
    });
  });