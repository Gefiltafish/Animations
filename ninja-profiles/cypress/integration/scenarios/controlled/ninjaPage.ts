import { ninjaMock } from './mockData';

describe('Entering the ninja-page', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/employees', ninjaMock).as('ninjaReq');
    cy.intercept(
      'GET',
      'https://www.linkedin.com//pub/agron-kabashi/54/6a8/4a6',
    );
    cy.visit('http://localhost:3000');
  });

  it('Then the user should be able use the available filters', () => {
    cy.contains('loading...').should('be.visible');

    cy.get('[placeholder="Search by name"]').clear().type('Agron Kabashi');
    cy.contains('Ahmad Mirzaei').should('not.exist');
    cy.get('[placeholder="Search by name"]').type('{backspace}').clear();

    cy.get('[placeholder="Search by office"]').clear().type('Lund').clear();
    cy.contains('Stockholm').should('not.exist');
    cy.get('[placeholder="Search by office"]').type('{backspace}');

    cy.get('[type="checkbox"]').first().click();
    // construct assertion
  });

  it('Then the links to other sites should be available', () => {
    cy.get(
      `[href="https://www.linkedin.com//pub/agron-kabashi/54/6a8/4a6"]`,
    ).should('be.visible');
    cy.get(`[href="https://github.com/AgronKabashi"]`).should('be.visible');
    cy.get(`[href="https://twitter.com/_agronkabashi"]`).should('be.visible');
  });
});
