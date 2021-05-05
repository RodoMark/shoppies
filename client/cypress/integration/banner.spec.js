describe("the banner", () => {
  it("is visible on all pages", () => {
    cy.visit('/')
      .get('.banner')
      .should('exist')
      
    cy.visit('/search')
        .get('.banner')
        .should('exist')

    cy.visit('/nominations')
      .get('.banner')
      .should('exist')
  })

  it("has a number that goes down as you add nominations", async () => {  
    cy.visit('/search')

    cy.get('.banner')
      .contains('5')
    
      .get('#film-search')
      .type('Star')
      .wait(1200)
  })

  it("displays a confirmation message once you choose 5 nominations", async () => {
    cy.visit('/search')

    cy.get('.banner')
      .contains('5')
    
      .get('#film-search')
      .type('Star')
      .wait(1200)

    cy.get('div.container > ul > li')
    .each(() => {
      cy.get('.btn')
      .contains('Add To Nominations')
      .click()        
    }, 4)

    cy.get('.banner')
      .contains('You have nominated 5 movies.')
  })
    

})