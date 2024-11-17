class SortablePage {
    navigateToSortable() {
      cy.get('.card').contains('Interactions').click();
      cy.get('span').contains('Sortable').click();
    }
  
    getListItems() {
      return cy.get('#demo-tabpane-list .list-group-item');
    }
  
    dragAndDrop(sourceIndex, targetIndex) {
      // Simula um drag-and-drop manual para o elemento desejado
      const dataTransfer = new DataTransfer();
      this.getListItems().eq(sourceIndex).trigger('dragstart', { dataTransfer });
      this.getListItems().eq(targetIndex).trigger('drop', { dataTransfer });
    }
  
    validateOrder(expectedOrder) {
      this.getListItems().then((items) => {
        const actualOrder = [...items].map((item) => item.innerText.trim());
        expect(actualOrder).to.deep.equal(expectedOrder);
      });
    }
  }
  
  export default new SortablePage();