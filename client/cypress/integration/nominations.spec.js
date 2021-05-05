describe("the nominations page", () => {
  it("renders correctly", () => {
    cy.visit('/nominations')
      .get('div.header')
      .contains('Your Nominations')
  })

  it("updates with nominations that have been selected and deselected", () => {
    cy.visit('/search')
      .get('#film-search')
      .should('exist')
    
      .get('#film-search')
      .type('Star')
      .wait(1200)
      .get('div.container > ul > li:nth-child(3)')
      .contains('Star Wars')
      .get('#root > section > div > article > div.container > ul > li:nth-child(3) > article > div.info > div.controls > button')
      .click()
      .get('nav > ul > li:nth-child(1) > section > div')
      .contains('4')
    
    cy.visit('/nominations')
      .get('article.nomination-card')
      .should('exist')
      .get('article > div.inner-card-controls > button')
      .click()
      .get('article.nomination-card')
      .should('not.exist')
      .get('nav > ul > li:nth-child(1) > section > div')
      .contains('5')
  })


    

})