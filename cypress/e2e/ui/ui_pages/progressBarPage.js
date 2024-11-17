class ProgressBarPage {
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
  
    validateProgressBar(value) {
      cy.get('.progress-bar')
        .invoke('text')
        .then((text) => {
          const progressValue = parseInt(text.replace('%', ''), 10);
          expect(progressValue).to.be.lte(value);
        });
    }
  
    waitForProgress(value) {
      cy.get('.progress-bar').should(($el) => {
        const progressValue = parseInt($el.text().replace('%', ''), 10);
        expect(progressValue).to.be.gte(value);
      });
    }
  }
  
  export default new ProgressBarPage();