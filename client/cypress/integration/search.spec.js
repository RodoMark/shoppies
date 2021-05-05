describe("the search page", () => {
  it("renders correctly", () => {
    cy.visit('/search')
    cy.get('#film-search-label').should('exist')
  })

  it("begins to search when you type", async () => {
    cy.visit('/search')
      .get('#film-search-label')
      .should('exist')
    
      .get('#film-search')
      .type('Star')

      await cy
        .get('div.container > ul > li:nth-child(1)')
        .contains('Episode IV - A New Hope')
        .get('.btn')
        .contains('Add To Nominations')
    
  })

  it("number of nominations goes down as user adds nominations", async () => {
    cy.visit('/search')
      .get('#film-search-label')
      .should('exist')
    
      .get('#film-search')
      .type('Star')

      const search = await cy
        .get('div.container > ul > li:nth-child(1)')
        .contains('Episode IV - A New Hope')
        .get('.btn')
        .contains('Add To Nominations')
    
  })
})