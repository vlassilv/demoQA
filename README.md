# Projeto de automação de testes utilizando Cypress para testes UI e API - DemoQA
   Este projeto contém testes automatizados usando [Cypress](https://www.cypress.io/). 

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Cenários de Testes](#cenários-de-testes)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Execução dos Testes](#execução-dos-testes)
  - [Modo Interativo (Cypress GUI)](#modo-interativo-cypress-gui)
  - [Modo Headless (Sem Interface Gráfica)](#modo-headless-sem-interface-gráfica)

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/en/) (versão atualizada)
- [npm](https://www.npmjs.com/) (normalmente vem com o Node.js)
- [Cypress](https://www.cypress.io/) (instalado via npm)

## Instalação

Siga estas etapas para clonar o repositório e instalar as dependências:

### Clonar o repositório
```
git clone https://github.com/vlassilv/demoQA.git
```
### Navegar para o diretório do projeto
```
cd demoQA-cypress
```
### Initialize node project and install cypress
```
npm init -y
npm install cypress --save-dev
```
### Abrir o Cypress pela primeira vez
```
npx cypress open
```
> Após abrir o cypress, será criado uma estrutura básica de pastas do Cypress

    /DemoQA

    ├── cypress

        ├── fixtures

        ├── support

    ├── node_modules

    ├── cypress.config.js

    ├── package-lock.json

    └── package.json

> Essa é uma estrutura básica, que pode ser modificada conforme necessidade.

### Instalar o cypress-file-upload, siga estes passos:

Instale a biblioteca usando o npm com o comando:
```
npm install --save-dev cypress-file-upload
```
Importe o plugin no arquivo de configuração do Cypress. Abra o arquivo cypress/support/commands.js e adicione esta linha:
```
import 'cypress-file-upload';
```
### Cenários de Teste

#### Feature: Test Browser Windows Page
#### Scenario: Open a new window and verify its contents
    Given I am on the demoqa homepage
    When I navigate to Alerts, Frame & Windows
    And I click on Browser Windows
    And I open a new window
    Then I verify the new window contains "This is a sample page"
    And I close the new window

#### Feature: Test Form Page
#### Scenario: Fill and submit the practice form
    Given I am on the demoqa homepage  
    When I navigate to the Forms section  
    And I click on Practice Form
    And I fill out the form with random data
    And I upload a .txt file
    Then I submit the form
    And I verify that a popup appears
    And I close the popup

#### Feature: Test Progress Bar
#### Scenario: Validate Progress Bar value
    Given I am on the demoqa homepage
    When I navigate to Widgets
    And I click on Progress Bar
    And I start the progress bar
    And I stop it before 25%
    Then I validate that the progress bar value is less than or equal to 25%
    And I start the progress bar again
    And I wait until it reaches 100% and reset the progress bar

#### Feature: Test Sortable Interaction
#### Scenario: Verify sorting functionality
    Given I am on the demoqa homepage
    When I navigate to Interactions
    And I click on Sortable
    Then I sort the list items
    And verify that items are in the new order

#### Feature: Test Web Tables Page
#### Scenario: Add, edit, and delete a record in Web Tables
    Given I am on the demoqa homepage
    When I navigate to Elements
    And I click on Web Tables
    And I create a new record
    And I edit the new record
    And I delete the new record
    Then I dynamically create 12 records using Cucumber
    And I delete all the created records

## Estrutura do Projeto

    demoQA/
        ├── cypress/
            ├── e2e/
                ├── api/                                # Testes de API
                    ├── api_pages/
                        ├── accontPages.js
                        ├── bookStorePage.js
                    └── api_tests/
                        └── ApiTests.cy.js    
                ├── ui/                                 # Testes de interface (E2E)          
                    ├── ui_pages/
                        ├── browserWindowsPage.js       # Page Object para interagir com elementos da página Browser Windows
                        ├── formPage.js                 # Page Object para interagir com elementos da página Form Page
                        ├── homePage.js                 # Page Object para interagir com elementos da página Home Page
                        ├── progressBarPage.js          # Page Object para interagir com elementos da página Progress Bar
                        ├── sortablePage.js             # Page Object para interagir com elementos da página Sortable
                        └── webTablesPage.js            # Page Object para interagir com elementos da página Web Tables
                    └── ui_tests/            
                        ├── browserWindows.cy.js        # Arquivo para o teste de Browser Windows
                        ├── formPage.cy.js              # Arquivo para o teste de Form Page
                        ├── progressBarPage.cy.js       # Arquivo para o teste de Progress Bar
                        ├── sortablePage.cy.js          # Arquivo para o teste de Sortable   
                        └── webTablesPage.cy.js         # Arquivo para o teste de Web Tables
            ├── fixtures/                               # Pasta para armazenar dados de teste fixos
                ├── books.json                          # Dados de exemplo para livros
                ├── config.json                         # Configurações específicas para testes            
                ├── fileUpload.txt                      # Arquivo de texto para upload            
                └── users.json                          # Dados de exemplo para usuários
            ├── support/
                ├── commands.js                         # Custom commands para o Cypress
                └── e2e.js                              # Configurações e eventos globais do Cypress
        ├── node_modules/                               # Dependências do projeto (gerado pelo npm)
        ├── .gitignore                                  # Arquivo para ignorar arquivos e pastas desnecessárias no Git
        ├── cypress.config.js                           # Configuração principal do Cypress, incluindo specPattern
        ├── package-lock.json                           # Controle das versões instaladas das dependência
        ├── package.json                                # Configuração do projeto Node.js, incluindo dependências e scripts
        └── README.md

### Descrição das Pastas e Arquivos

- cypress/e2e/pages/: Contém arquivos JavaScript que definem os Page Objects. Cada arquivo aqui representa uma página ou componente específico da aplicação e contém métodos para interagir com elementos dessa página.

- cypress/fixtures/: Contém arquivos com dados que podem ser usados em testes.

- cypress/support/commands.js: Arquivo para comandos personalizados do Cypress que podem ser usados em diferentes testes.

- cypress/support/e2e.js: Configurações e eventos globais do Cypress.

- cypress.config.js: Configuração principal do Cypress, onde define o caminho e outras opções de configurações.

- package.json: Arquivo de configuração do npm que contém as dependências e scripts do projeto.

- .gitignore: Arquivo para especificar quais arquivos e pastas o Git deve ignorar.

- README.md: Arquivo opcional para documentar o projeto, instruindo outros usuários sobre como configurar e executar os testes.

## Execução dos Testes

### Modo Interativo (Cypress GUI)
Para rodar os testes de forma interativa com a interface gráfica do Cypress:
```
npx run open
```
### Modo Headless (Sem Interface Gráfica)
Para rodar os testes em modo headless (útil para CI/CD ou pipelines):
```
npm run test:api
npm run test:ui
npm run test:all
```