import widgetsPage from '../pages/widgetsPage';

describe('Cenário 04 - Progress Bar', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/');
  });

  it('Controlar e validar o progresso da Progress Bar', () => {
    // Navega até o submenu Progress Bar
    widgetsPage.navigateToProgressBar();

    // Inicia a Progress Bar
    widgetsPage.startProgressBar();

    // Aguarda o progresso atingir ou passar de 25% e para
    widgetsPage.waitUntilProgress(25);

    // Valida que o progresso é menor ou igual a 25%
    widgetsPage.validateProgressBar(25);

    // Reinicia a Progress Bar e espera até 100%
    widgetsPage.startProgressBar();
    widgetsPage.waitUntilProgress(100);

    // Reseta a Progress Bar
    widgetsPage.resetProgressBar();
  });
});