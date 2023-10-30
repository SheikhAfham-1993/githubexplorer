import userData_afham from '../fixtures/userData_afham.json'
import userData_fabpot from '../fixtures/userData_fabpot.json'

let afham: any = userData_afham
let fabpot: any = userData_fabpot

describe('Profile Description', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')

    cy.get('[data-cy=navigation-row]')
      .should('be.visible')
      .within(() => {
        cy.get('[data-cy=search-input-container]')
          .should('be.visible')
          .within(() => {
            cy.get('[data-cy=search-input]').should('be.visible')
          })
      })
  })
  it('checks if the profile description is there for sheikh afham', () => {
    cy.get('[data-cy=search-input]')
      .type('sheikhafham-1993')
      .then(() => {
        cy.get('[data-cy=search-button]').should('not.be.disabled').click()
      })

    cy.intercept('POST', 'https://api.github.com/graphql', {
      statusCode: 200,
      body: afham,
    })
      .wait(2000)
      .then(() => {
        cy.get('[data-cy=profile-description]')
          .should('be.visible')
          .then(() => {
            cy.get('[data-cy=profile-avatar]').should('be.visible')
            cy.get('[data-cy=profile-followers]').should('be.visible')
            cy.get('[data-cy=profile-social]').should('be.visible')
          })
      })
  })

  it('checks if the profile description is there for fabpot', () => {
    cy.get('[data-cy=search-input]')
      .type('fabpot')
      .then(() => {
        cy.get('[data-cy=search-button]').should('not.be.disabled').click()
      })

    cy.intercept('POST', 'https://api.github.com/graphql', {
      statusCode: 200,
      body: fabpot,
    })
      .wait(3000)
      .then(() => {
        cy.get('[data-cy=profile-description]')
          .should('be.visible')
          .then(() => {
            cy.get('[data-cy=profile-avatar]').should('be.visible')
            cy.get('[data-cy=profile-followers]').should('be.visible')
            cy.get('[data-cy=profile-social]').should('be.visible')
          })
      })
  })
})
