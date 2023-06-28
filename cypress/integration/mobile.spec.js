beforeEach(() => {
  cy.viewport('iphone-6')
})


describe("the mobile version", () => {
  it("renders correctly", () => {
    

    cy.visit('/')
    cy.get('span.MuiButton-label')
      .should('exist')
  })

  it("is able to use the mobile navbar to navigate the page", () => {

    cy.visit('/')
    cy.get('#nav-mobile > button')
      .click()
      .get('#nav-mobile-open > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(2)')
      .click()
    
    cy.get('#film-search')
      .should('exist')

    cy.get('#nav-mobile > button')
      .click()
      .get('#nav-mobile-open > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(1)')
      .click()

    cy.get('h1')
      .contains('SHOPPIES')
  })

  it("it can use the search bar in mobile view", async () => {
    cy.viewport('iphone-6')

    cy.visit('/search')
    .get('#film-search')
    .should('exist')
  
    .get('#film-search')
    .type('Star')

    await cy
      .get('div.container > ul > li:nth-child(1)')
      .contains('Episode IV - A New Hope')
    
  })

})