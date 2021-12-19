const MULTI_MODAL_URL = 'https://www.w3.org/standards/webofdevices/multimodal'

describe('multi modal - ' + Cypress.browser.name, () => {
  it('multi modal page should return 200', () => {
    cy.request({
      url: MULTI_MODAL_URL,
      followRedirect: true,
    }).then((resp) => {
      expect(resp.status).to.eq(200)
    })
  })

  it('checks console errors on multi modal page', () => {
    let windowErrorSpy;
    Cypress.on('window:before:load', (win) => {
      windowErrorSpy = cy.spy(win.console, 'error'); 
    });
    cy.visit(MULTI_MODAL_URL)
    cy.wait(1000).then(() => {
      expect(windowErrorSpy).to.not.be.called; 
    });
  })

  it('check if all the hrefs return 200', () => {
    cy.visit(MULTI_MODAL_URL)
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
