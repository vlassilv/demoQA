import homePage from '../ui_pages/homePage';
import sortablePage from '../ui_pages/sortablePage';
import '@4tw/cypress-drag-drop';

describe('Cenário 05 - Sortable List', () => {
  beforeEach(() => {
    homePage.visit();
  });

  it('Reorganizar os elementos da lista em ordem crescente', () => {
    // Navega até o submenu Sortable
    sortablePage.navigateToSortable();

    // Lista inicial dos itens (obtenha os textos visíveis para validar posteriormente)
    const initialOrder = [];
    sortablePage.getListItems().each(($el) => initialOrder.push($el.text().trim()));

    // Define a ordem crescente esperada
    const expectedOrder = [...initialOrder].sort();

    // Realiza o drag-and-drop dos elementos
    for (let i = 0; i < initialOrder.length; i++) {
      const currentIndex = initialOrder.indexOf(expectedOrder[i]);
      if (i !== currentIndex) {
        sortablePage.dragAndDrop(currentIndex, i);
        // Atualiza a ordem atual dos elementos
        const temp = initialOrder[currentIndex];
        initialOrder.splice(currentIndex, 1);
        initialOrder.splice(i, 0, temp);
      }
    }

    // Valida que a lista está na ordem correta
    sortablePage.validateOrder(expectedOrder);
  });
});