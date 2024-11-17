class WidgetsPage {
    navigateToProgressBar() {
      cy.get('.card').contains('Widgets').click();
      cy.get('span').contains('Progress Bar').click();
    }
  
    startProgressBar() {
      cy.get('#startStopButton').click();
    }
  
    stopProgressBar() {
      cy.get('#startStopButton').click();
    }
  
    resetProgressBar() {
      cy.get('#resetButton').click();
    }
  
    validateProgressBar(maxValue) {
      cy.get('.progress-bar')
        .invoke('text')
        .then((text) => {
          const progressValue = parseInt(text.replace('%', ''), 10);
          expect(progressValue).to.be.lte(maxValue);
        });
    }
  
    waitUntilProgress(targetValue) {
      // Verifica repetidamente o valor da barra até atingir o targetValue
      cy.get('.progress-bar').should(($el) => {
        const progressValue = parseInt($el.text().replace('%', ''), 10);
        if (progressValue >= targetValue) {
          this.stopProgressBar(); // Para a barra se atingir o valor
        }
      });
    }
  }
  
  export default new WidgetsPage();