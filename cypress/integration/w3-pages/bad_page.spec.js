describe('bad page - ' + Cypress.browser.name, () => {

  it('bad page should return 404', () => {
    cy.request({
      url: 'https://www.w3.org/standards/badpage',
      followRedirect: true,
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(404)
    })
  })

  it('checks console errors on bad page', () => {
    let windowErrorSpy;
    Cypress.on('window:before:load', (win) => {
      windowErrorSpy = cy.spy(win.console, 'error'); 
    });
    cy.visit({
      url: 'https://www.w3.org/standards/badpage',
      failOnStatusCode: false,
    })
    cy.wait(1000).then(() => {
      expect(windowErrorSpy).to.not.be.called; 
    });
  })

  it('check if all the hrefs return 200', () => {
    cy.visit({
      url: 'https://www.w3.org/standards/badpage',
      failOnStatusCode: false,
    })
    cy.get('a').each(($anchorlink, index, list) => {

    // Skipping empty hrefs and the links on bad page
    if ($anchorlink.prop('href') && !$anchorlink.prop('href').startsWith('https://www.w3.org/standards/badpage')){
      cy.request({
        url: $anchorlink.prop('href'),
        followRedirect: true,
        failOnStatusCode: false,
      }).then((resp) => {
        expect(resp.status).to.eq(200)
      })
    }})
  })
})
