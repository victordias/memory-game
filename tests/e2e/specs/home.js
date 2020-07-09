// https://docs.cypress.io/api/introduction/api.html

describe('Home Page', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Obliviate!');
  });

  it('Start game by click in button', () => {
    cy.visit('/');
    cy.get('.presentation__startgame').click();
    cy.contains('h1', 'Vamos começar?');
  });

  it('Open Ranking by button', () => {
    cy.visit('/');
    cy.get('.ranking-link').click();
    cy.contains('h1', 'Hall da Fama');
  });
});
