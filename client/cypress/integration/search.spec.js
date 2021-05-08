describe("the search page", () => {
  it("renders correctly", () => {
    cy.visit('/search')
    cy.get('#film-search-label').should('exist')
  })

  it("begins to search when you type", async () => {
    cy.visit('/search')
      .get('#film-search')
      .should('exist')
    
      .get('#film-search')
      .type('Star')

      await cy
        .get('div.container > ul > li:nth-child(1)')
        .contains('Episode IV - A New Hope')

    
  })

  it("number of nominations goes down as user adds nominations", () => {
    cy.visit('/search')
      .get('#film-search')
      .type('Star')
      .wait(1200)
  
    cy.get('article > div.container > ul')
      .contains('ADD TO NOMATIONS')
      .click()
      .get('.banner')
      .contains('4')
  
  })
})