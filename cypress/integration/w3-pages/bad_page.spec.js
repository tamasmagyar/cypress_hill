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
})
