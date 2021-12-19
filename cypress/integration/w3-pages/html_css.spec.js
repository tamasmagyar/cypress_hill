describe('html, css - ' + Cypress.browser.name, () => {
  afterEach(function onAfterEach() {
    if (this.currentTest.state === 'failed') {
      Cypress.runner.stop();
    }
  });

  it('html css page should return 200', () => {
    cy.request({
      url: 'https://www.w3.org/standards/webdesign/htmlcss',
      followRedirect: true,
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(200)
    })
  })

  it('checks console errors on html, css page', () => {
    let windowErrorSpy;
    Cypress.on('window:before:load', (win) => {
      windowErrorSpy = cy.spy(win.console, 'error'); 
    });
    cy.visit('https://www.w3.org/standards/webdesign/htmlcss')
    cy.wait(1000).then(() => {
      expect(windowErrorSpy).to.not.be.called; 
    });
  })

  it('check if all the hrefs return 200', () => {
    cy.visit('https://www.w3.org/standards/webdesign/htmlcss')
    cy.get('a').each(($anchorlink, index, list) => {

    // Skipping empty and mailto hrefs
    if ($anchorlink.prop('href') && !$anchorlink.prop('href').startsWith('mailto')){
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
