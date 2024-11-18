import Faker from 'faker';

class FormPage {
  navigateToFormsSection() {
    cy.get('.card-body').contains('Forms').click();
  }

  navigateToPracticeForm() {
    cy.contains('Practice Form').click();
  }

  fillFormWithRandomData() {
    cy.get('#firstName').type(Faker.name.firstName());
    cy.get('#lastName').type(Faker.name.lastName());
    cy.get('#userEmail').type(Faker.internet.email());
    cy.get('input[name="gender"][value="Male"]').check({ force: true });
    cy.get('#userNumber').type(Faker.phone.phoneNumber());
    cy.get('#dateOfBirthInput').clear().type('01 Jan 2000').type('{enter}');
    cy.get('.subjects-auto-complete__value-container').type('Math{enter}');
    cy.get('input[type="checkbox"]').check('Sports', { force: true });
    cy.get('#currentAddress').type(Faker.address.streetAddress());
    cy.get('#state').click().type('NCR{enter}');
    cy.get('#city').click().type('Delhi{enter}');
  }

  uploadTxtFile() {
    cy.get('#uploadPicture').attachFile('example.txt'); // Certifique-se de que o arquivo está em `cypress/fixtures`
  }

  submitForm() {
    cy.get('#submit').click();
  }

  verifyPopupAppears() {
    cy.get('.modal-content').should('be.visible');
  }

  closePopup() {
    cy.get('#closeLargeModal').click();
  }
}

export default new FormPage();