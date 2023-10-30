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

    cy.intercept('POST', 'https://api.github.com/graphql', {
      fixture: 'userData_afham.json',
    })
  })
  it('checks if the profile description is there', () => {
    cy.get('[data-cy=search-input]')
      .type('sheikhafham-1993')
      .then(() => {
        cy.get('[data-cy=search-button]').should('not.be.disabled').click()
        cy.get('[data-cy=profile-description]')
          .should('be.visible')
          .then(() => {
            cy.get('[data-cy=profile-avatar]').should('be.visible')
            cy.get('[data-cy=profile-followers]').should('be.visible')
            cy.get('[data-cy=profile-social]').should('be.visible')
          })
        // cy.intercept('POST', 'https://api.github.com/graphql', {
        //   fixture: 'userData_afham.json',
        // }).then(() => {

        // })
      })
  })

  // it('checks if the profile description is there for fabpot', () => {
  //   cy.get('[data-cy=search-input]')
  //     .clear()
  //     .type('fabpot')
  //     .then(() => {
  //       cy.get('[data-cy=search-button]').should('not.be.disabled').click()
  //       cy.intercept('POST', 'https://api.github.com/graphql', {
  //         fixture: 'userData_fabpot.json',
  //       })
  //         .wait(2000)
  //         .then(() => {
  //           cy.get('[data-cy=profile-description]')
  //             .should('be.visible')
  //             .then(() => {
  //               cy.get('[data-cy=profile-avatar]').should('be.visible')
  //               cy.get('[data-cy=profile-followers]').should('be.visible')
  //               cy.get('[data-cy=profile-social]').should('be.visible')
  //             })
  //         })
  //     })
  // })
})
