class WebTablesPage {
    navigateToWebTables() {
      cy.get('.card').contains('Elements').click();
      cy.get('span').contains('Web Tables').click();
    }
  
    addNewRecord(data) {
      cy.get('#addNewRecordButton').click();
      cy.get('#firstName').type(data.firstName);
      cy.get('#lastName').type(data.lastName);
      cy.get('#userEmail').type(data.email);
      cy.get('#age').type(data.age);
      cy.get('#salary').type(data.salary);
      cy.get('#department').type(data.department);
      cy.get('#submit').click();
    }
  
    editRecord(oldData, newData) {
      cy.contains('div.rt-tr', oldData.firstName)
        .find('[title="Edit"]')
        .click();
      cy.get('#firstName').clear().type(newData.firstName);
      cy.get('#lastName').clear().type(newData.lastName);
      cy.get('#submit').click();
    }
  
    deleteRecord(data) {
      cy.contains('div.rt-tr', data.firstName)
        .find('[title="Delete"]')
        .click();
    }
  
    deleteAllRecords() {
      cy.get('.rt-tr-group').each(($row) => {
        cy.wrap($row).find('[title="Delete"]').click();
      });
    }
  }
  
  export default new WebTablesPage();