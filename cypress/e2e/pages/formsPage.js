class FormsPage {
    navigateToPracticeForm() {
      cy.get('.card').contains('Forms').click();
      cy.get('span').contains('Practice Form').click();
    }
  
    fillForm(data) {
      cy.get('#firstName').type(data.firstName);
      cy.get('#lastName').type(data.lastName);
      cy.get('#userEmail').type(data.email);
      cy.get(`input[name="gender"][value="${data.gender}"]`).check({ force: true });
      cy.get('#userNumber').type(data.mobile);
      cy.get('#dateOfBirthInput').click();
      cy.get('.react-datepicker__year-select').select(data.birthYear);
      cy.get('.react-datepicker__month-select').select(data.birthMonth);
      cy.get(`.react-datepicker__day--0${data.birthDay}`).click();
      cy.get('#subjectsInput').type(data.subjects).type('{enter}');
      cy.get(`input[name="hobbies"][value="${data.hobby}"]`).check({ force: true });
      cy.get('#uploadPicture').attachFile('sample.txt');
      cy.get('#currentAddress').type(data.address);
      cy.get('#state').click().contains(data.state).click();
      cy.get('#city').click().contains(data.city).click();
    }
  
    submitForm() {
      cy.get('#submit').click();
      cy.get('.modal-content').should('be.visible');
      cy.get('#closeLargeModal').click();
    }
  }
  
  export default new FormsPage();