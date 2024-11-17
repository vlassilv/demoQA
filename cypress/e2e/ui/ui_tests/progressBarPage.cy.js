import homePage from '../pages/homePage';
import progressBarPage from '../pages/progressBarPage';

describe('Cenário 04 - Progress Bar', () => {
  beforeEach(() => {
    homePage.visit();
  });

  it('Validar controle da Progress Bar', () => {
    // Navega para o submenu Progress Bar
    progressBarPage.navigateToProgressBar();

    // Inicia a Progress Bar
    progressBarPage.startProgressBar();

    // Aguarda até o valor ser menor ou igual a 25% e para
    cy.wait(500); // Ajustar tempo para observar o progresso
    progressBarPage.stopProgressBar();
    progressBarPage.validateProgressBar(25);

    // Reinicia a Progress Bar e aguarda até atingir 100%
    progressBarPage.startProgressBar();
    progressBarPage.waitForProgress(100);

    // Reseta a Progress Bar
    progressBarPage.resetProgressBar();
  });
});