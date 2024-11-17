class BookStorePage {
    listBooks() {
      return cy.request({
        method: 'GET',
        url: 'https://demoqa.com/BookStore/v1/Books',
      });
    }
  
    rentBooks(userId, token, books) {
      return cy.request({
        method: 'POST',
        url: `https://demoqa.com/BookStore/v1/Books`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          userId: userId,
          collectionOfIsbns: books.map((isbn) => ({ isbn })),
        },
      });
    }
  }
  
  export default new BookStorePage();