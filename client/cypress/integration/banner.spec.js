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

    await cy
      .get('div.container > ul > li:nth-child(1)')
      
    cy.contains('Episode IV - A New Hope')
      .get('.btn')
      .contains('Add To Nominations')
      .click()
    



    
  })
})