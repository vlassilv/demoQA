import BrowserWindows from '../ui_pages/browserWindows';
import homePage from '../ui_pages/homePage';

describe('Cenário 02 - Browser Windows', () => {
  beforeEach(() => {
    homePage.visit();
    cy.stubWindowOpen(); // Adiciona o stub para capturar a nova janela
  });

  it('Valida mensagem da nova janela', () => {
    const expectedMessage = 'This is a sample page';

    // Navega para o submenu "Browser Windows"
    BrowserWindows.navigateToBrowserWindows();

    // Clica no botão para abrir nova janela
    BrowserWindows.openNewWindow();

    // Valida a mensagem na nova janela
    BrowserWindows.validateNewWindowMessage(expectedMessage);
  });
});