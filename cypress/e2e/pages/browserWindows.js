class BrowserWindows {
    navigateToBrowserWindows() {
      cy.get('.card').contains('Alerts, Frame & Windows').click();
      cy.get('span').contains('Browser Windows').click();
    }
  
    openNewWindow() {
      cy.get('#windowButton').click();
    }
  
    validateNewWindowMessage(expectedMessage) {
      cy.window().then((win) => {
        const newWindowUrl = win.open.args[0][0]; // Obtém a URL da nova janela
        cy.visit(newWindowUrl).then(() => {
          cy.get('body').should('contain.text', expectedMessage);
          cy.go('back'); // Volta para a página anterior
        });
      });
    }
  }
  
  export default new BrowserWindows();