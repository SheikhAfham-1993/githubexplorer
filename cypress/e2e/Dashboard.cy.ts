describe('Dashboard initially', () => {
  it('checks if the header is there', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy=header]').should('be.visible')
  })
  it('Check if header title is visible', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy=header-title]')
      .should('be.visible')
      .should('contain', 'Github Explorer')
  })

  it('Check if Navigation bar is visible', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy=navigation-row]')
      .should('be.visible')
      .within(() => {
        cy.get('[data-cy=navigation]')
          .should('be.visible')
          .within(() => {
            cy.get('[data-cy=navigation-item]')
              .should('be.visible')
              .within(() => {
                cy.get('[data-cy=navigation-repo]')
                  .should('be.visible')
                  .within(() => {
                    cy.get('[data-cy=navigation-item-name]')
                      .should('be.visible')
                      .should('contain', 'Repositories')
                  })
              })
          })
      })
  })

  it('Check if search input is empty initially', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy=navigation-row]')
      .should('be.visible')
      .within(() => {
        cy.get('[data-cy=search-input-container]')
          .should('be.visible')
          .within(() => {
            cy.get('[data-cy=search-input]').should('be.empty')
          })
      })
  })

  it('Check if search input button is disabled', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy=navigation-row]')
      .should('be.visible')
      .within(() => {
        cy.get('[data-cy=search-button]')
          .should('be.visible')
          .should('be.disabled')
      })
  })

  it('no repository text is visible', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy=dashboard]')
      .should('be.visible')
      .within(() => {
        cy.get('[data-cy=dashboard-content]')
          .should('be.visible')
          .within(() => {
            cy.get('[data-cy=no-repositories]')
              .should('be.visible')
              .within(() => {
                cy.get('[data-cy=no-repositories-label]')
                  .should('be.visible')
                  .should('contain', 'No repositories to show')
              })
          })
      })
  })
})
