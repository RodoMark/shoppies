describe("the mobile version", () => {
  it("renders correctly", () => {
    cy.viewport('iphone-6')

    cy.visit('/')
    cy.get('span.MuiButton-label')
      .should('exist')
  })

  it("renders correctly", () => {
    cy.viewport('iphone-6')

    cy.visit('/')
    cy.get('#nav-mobile')
      .click()
      .get('#nav-mobile-open > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(2)')
      .click()
    
    cy.get('#film-search')
      .should('exist')

    cy.get('#nav-mobile')
      .click()
      .get('#nav-mobile-open > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(1)')
      .click()

    cy.get('h1')
      .contains('SHOPPIES')
  })


})