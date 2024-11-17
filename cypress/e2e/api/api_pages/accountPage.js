class AccountPage {
    createUser(username, password) {
      return cy.request({
        method: 'POST',
        url: 'https://demoqa.com/Account/v1/User',
        body: {
          userName: username,
          password: password,
        },
      });
    }
  
    generateToken(username, password) {
      return cy.request({
        method: 'POST',
        url: 'https://demoqa.com/Account/v1/GenerateToken',
        body: {
          userName: username,
          password: password,
        },
      });
    }
  
    checkAuthorization(username, password) {
      return cy.request({
        method: 'POST',
        url: 'https://demoqa.com/Account/v1/Authorized',
        body: {
          userName: username,
          password: password,
        },
      });
    }
  
    getUserDetails(userId, token) {
      return cy.request({
        method: 'GET',
        url: `https://demoqa.com/Account/v1/User/${userId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
  }
  
  export default new AccountPage();