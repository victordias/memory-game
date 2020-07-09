// https://docs.cypress.io/api/introduction/api.html

describe('Home Page', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Obliviate!');
    cy.wait(1000);
  });

  it('Go to Game from click in button', () => {
    cy.visit('/');
    cy.get('.presentation__startgame').click();
    cy.contains('h1', 'Vamos começar?');
    cy.wait(1000);
  });

  it('Go to Ranking from button click', () => {
    cy.visit('/');
    cy.get('.ranking-link').click();
    cy.contains('h1', 'Hall da Fama');
  });
});
