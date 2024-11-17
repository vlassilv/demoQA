class HomePage {
    visit() {
        cy.visit('https://demoqa.com/');
    }
    /**
     * Seleciona uma opção principal no menu da página inicial.
     * @param {string} optionName - O nome da opção principal (ex.: 'Forms', 'Elements', 'Widgets').
     */
    selectMainOption(optionName) {
        cy.get('.card').contains(optionName).click();
    }
}

export default new HomePage();