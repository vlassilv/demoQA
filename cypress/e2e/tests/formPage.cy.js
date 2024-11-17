import formsPage from '../pages/formsPage';

describe('Cenário 01 - Forms', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/');
  });

  it('Preenche e submete o formulário', () => {
    const formData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      gender: 'Male',
      mobile: '1234567890',
      birthYear: '1990',
      birthMonth: 'January',
      birthDay: '10',
      subjects: 'Maths',
      hobby: 'Sports',
      address: '123 Cypress Ave',
      state: 'NCR',
      city: 'Delhi',
    };

    formsPage.navigateToPracticeForm();
    formsPage.fillForm(formData);
    formsPage.submitForm();
  });
});