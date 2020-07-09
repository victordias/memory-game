// https://docs.cypress.io/api/introduction/api.html

describe('Oblivion - Memory Game', () => {
  it('Visits the game url', () => {
    cy.visit('jogo-da-memoria/jogar');
    cy.contains('h1', 'Vamos começar?');
  });

  it('Start game inserting player name', () => {
    const name = 'Victor Oliveira';
    cy.visit('jogo-da-memoria/jogar');
    cy.get('.player__name').type(name);
    cy.get('#game__start').click();
    cy.contains('h2', name);
  });

  it('Round Counter must have value equals 00', () => {
    cy.get('.round-counter__value').contains('00');
  });

  it('Should flip a card', () => {
    cy.get('.card').first().click();
    cy.get('.card').first().should('have.class', 'card--active');
  });

  it('Round Counter must be increment after other card flipped', () => {
    cy.get('.game-table__item:last-child').click();
    cy.wait(900);
    cy.get('.round-counter__value').contains('01');
  });

  it('Win the game', () => {
    for (let i = 1; i <= 10; i += 1) {
      cy.get(`.card-value__${i}`).click({ multiple: true });
    }
    cy.get('.modal.game-over__modal')
      .contains('h1.modal__title', 'Parabéns, Victor Oliveira!');
    cy.wait(1500);
  });

  it('Restart the game after win and after check Hall of Fame', () => {
    const name = 'Família Buscapé';

    cy.get('#game__restart').click();
    cy.get('.player__name').clear().type(name);
    cy.get('#game__start').click();
    cy.contains('h2', name);
    cy.wait(1200);
    cy.visit('/jogo-da-memoria/hall-da-fama');
  });
});
