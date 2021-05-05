describe("renders the search page", () => {
  it("renders correctly", () => {
    cy.visit('/search')
    cy.get('#film-search-label').should('exist')
    cy.get('#year-search-label').should('exist')
  })
})