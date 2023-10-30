describe('Repositories testing', () => {
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

    cy.intercept('POST', 'https://api.github.com/graphql', {
      fixture: 'userData_afham_NoRepo.json',
    })
  })

  it('checks if no repositories are there', () => {
    cy.get('[data-cy=search-input]')
      .type('sheikhafham-1993')
      .then(() => {
        cy.get('[data-cy=search-button]').should('not.be.disabled').click()
        cy.get('[data-cy=repositories-container]')
          .should('be.visible')
          .then(() => {
            cy.get('[data-cy=repositories-container]')
              .should('be.visible')
              .then(() => {
                cy.get('[data-cy=find-repositories]')
                  .should('be.visible')
                  .type('WDI')
                  .then(() => {
                    cy.get('[data-cy=search-results]')
                      .should('be.visible')
                      .then(() => {
                        cy.get('[data-cy=search-results-text]').should(
                          'contain',
                          '0 result for repositories matching data'
                        )
                      })
                  })

                cy.get('[data-cy=user-repositories]')
                  .should('be.visible')
                  .then(() => {
                    cy.get('[data-cy=no-repositories-found]').should(
                      'be.visible'
                    )
                  })
              })
          })
      })
  })
})
