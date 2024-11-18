class BrowserWindows {
  navigateToBrowserWindows() {
    cy.contains('Alerts, Frame & Windows').click();
    cy.contains('Browser Windows').click();
  }

  openNewWindow() {
    cy.get('#windowButton').click(); // Selecione o botão de abrir nova janela
  }

  validateNewWindowMessage(expectedMessage) {
    cy.validateWindowContent(expectedMessage); // Usa o comando customizado
  }
}

export default new BrowserWindows();