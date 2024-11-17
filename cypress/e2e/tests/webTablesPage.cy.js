import webTablesPage from '../pages/webTablesPage';

describe('Cenário 03 - Web Tables', () => {
  const recordData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    age: '30',
    salary: '50000',
    department: 'IT',
  };

  const updatedRecordData = {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    age: '35',
    salary: '60000',
    department: 'HR',
  };

  beforeEach(() => {
    cy.visit('https://demoqa.com/');
  });

  it('Adicionar, editar e deletar um registro', () => {
    webTablesPage.navigateToWebTables();

    // Adicionar um novo registro
    webTablesPage.addNewRecord(recordData);

    // Editar o registro adicionado
    webTablesPage.editRecord(recordData, updatedRecordData);

    // Deletar o registro atualizado
    webTablesPage.deleteRecord(updatedRecordData);
  });

  it('Criar e deletar 12 registros dinamicamente', () => {
    webTablesPage.navigateToWebTables();

    // Criar 12 registros dinamicamente
    Array.from({ length: 12 }).forEach((_, index) => {
      const dynamicData = {
        firstName: `User${index + 1}`,
        lastName: `Test${index + 1}`,
        email: `user${index + 1}@example.com`,
        age: `${20 + index}`,
        salary: `${30000 + index * 1000}`,
        department: `Dept${index + 1}`,
      };
      webTablesPage.addNewRecord(dynamicData);
    });

    // Deletar todos os registros
    webTablesPage.deleteAllRecords();
  });
});