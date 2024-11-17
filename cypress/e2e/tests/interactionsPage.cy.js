import interactionsPage from '../pages/interactionsPage';
import '@4tw/cypress-drag-drop';

describe('Cenário 05 - Sortable List', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/');
  });

  it('Reorganizar os elementos da lista em ordem crescente', () => {
    // Navega até o submenu Sortable
    interactionsPage.navigateToSortable();

    // Lista inicial dos itens (obtenha os textos visíveis para validar posteriormente)
    const initialOrder = [];
    interactionsPage.getListItems().each(($el) => initialOrder.push($el.text().trim()));

    // Define a ordem crescente esperada
    const expectedOrder = [...initialOrder].sort();

    // Realiza o drag-and-drop dos elementos
    for (let i = 0; i < initialOrder.length; i++) {
      const currentIndex = initialOrder.indexOf(expectedOrder[i]);
      if (i !== currentIndex) {
        interactionsPage.dragAndDrop(currentIndex, i);
        // Atualiza a ordem atual dos elementos
        const temp = initialOrder[currentIndex];
        initialOrder.splice(currentIndex, 1);
        initialOrder.splice(i, 0, temp);
      }
    }

    // Valida que a lista está na ordem correta
    interactionsPage.validateOrder(expectedOrder);
  });
});