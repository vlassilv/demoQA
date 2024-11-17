import accountPage from '../pages/accountPage';
import bookStorePage from '../pages/bookStorePage';

describe('API Automation Tests', () => {
  let token;
  let userId;
  const username = `user${Date.now()}`;
  const password = 'Password@123';

  it('Deve criar um usuário, gerar token, alugar livros e validar detalhes do usuário', () => {
    // Criar um usuário
    accountPage.createUser(username, password).then((response) => {
      expect(response.status).to.eq(201);
      userId = response.body.userID;
    });

    // Gerar token de acesso
    accountPage.generateToken(username, password).then((response) => {
      expect(response.status).to.eq(200);
      token = response.body.token;
    });

    // Confirmar autorização do usuário
    accountPage.checkAuthorization(username, password).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.true;
    });

    // Listar livros disponíveis
    bookStorePage.listBooks().then((response) => {
      expect(response.status).to.eq(200);
      const books = response.body.books;
      expect(books).to.have.length.greaterThan(1);

      // Escolher dois livros para alugar
      const selectedBooks = books.slice(0, 2).map((book) => book.isbn);

      // Alugar os livros
      bookStorePage.rentBooks(userId, token, selectedBooks).then((response) => {
        expect(response.status).to.eq(201);
      });

      // Listar os detalhes do usuário com os livros escolhidos
      accountPage.getUserDetails(userId, token).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.books).to.have.length(2);
        const rentedBooksIsbns = response.body.books.map((book) => book.isbn);
        expect(rentedBooksIsbns).to.include.members(selectedBooks);
      });
    });
  });
});