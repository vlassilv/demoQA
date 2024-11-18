import formPage from '../ui_pages/formPage';
import faker from 'faker';
import homePage from '../ui_pages/homePage';

describe('Formulário DemoQA com Page Object e dados aleatórios', () => {
  it('Deve preencher e submeter o formulário', () => {
    // Acessar a página do formulário
    homePage.visit();
    // Gerar dados aleatórios com faker
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const phoneNumber = faker.phone.phoneNumber('##########');
    const subject = 'Math'; // Você pode modificar para escolher aleatoriamente
    const hobby = 1; // "Sports" (1), "Reading" (2), "Music" (3)
    const file = 'arquivo.txt'; // O arquivo precisa estar em cypress/fixtures

    // Preencher o formulário com dados aleatórios
    formPage.fillForm(firstName, lastName, email, phoneNumber, subject, hobby, file);

    // Submeter o formulário
    formPage.submitForm();

    // Verificar popup de sucesso
    formPage.verifyPopup();

    // Fechar o popup
    formPage.closePopup();
  });
});