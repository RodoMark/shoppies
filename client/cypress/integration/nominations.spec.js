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

  it("allows for submission when 5 films have been selected", () => {
    cy.visit('/search')    
      .get('#film-search')
      .type('Star')
      .wait(1200)
  
    for(let i = 1; i <= 4; i++) {
      cy.get(`div.container > ul > li:nth-child(${i})`)
      .get(`#root > section > div > article > div.container > ul > li:nth-child(${i}) > article > div.info > div.controls > button`)
      .click()
      .get(`nav > ul > li:nth-child(1) > section > div`)
      .contains(`${5 - i}`)
    }
    
    cy.get(`div.container > ul > li:nth-child(5)`)
      .get(`#root > section > div > article > div.container > ul > li:nth-child(5) > article > div.info > div.controls > button`)
      .click()
      .get(`nav > ul > li:nth-child(1) > section > div`)
      .contains(`submit`)
      .click()

    cy.get('div.container > h1')
      .contains('Thank you')
      .get('div.container > button')
      .click()
      .get('nav > ul > li:nth-child(1) > section > div')
      .contains('5 more')

  })

  it("mobile version allows for submission when 5 films have been selected", () => {
    cy.viewport('iphone-6')

    cy.visit('/search')    
      .get('#film-search')
      .type('Star')
      .wait(1200)
  
    for(let i = 1; i <= 4; i++) {
      cy.get(`div.container > ul > li:nth-child(${i})`)
      .get(`#root > section > div > article > div.container > ul > li:nth-child(${i}) > article > div.info > div.controls > button`)
      .click()
      .get(`#banner-mobile`)
      .find('div#banner-text')
      .contains(`${i}`)
    }
    
    cy.get(`div.container > ul > li:nth-child(5)`)
      .get(`#root > section > div > article > div.container > ul > li:nth-child(5) > article > div.info > div.controls > button`)
      .click()
      .get(`div#banner-text`)
      .contains(`submit`)
      .click()

    cy.get('div.container > h1')
      .contains('Thank you')
      .get('div.container > button')
      .click()
      .get('#nav-mobile > button > span.MuiButton-label')
      .click()
      .get('#nav-mobile-open > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(1)')
      .click()
      .get('nav#nav-mobile')
      .contains('0/5')
  })

    

})