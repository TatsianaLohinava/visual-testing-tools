describe('template spec', () => {
  it('toggles drawer', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[aria-label="close drawer"]').click()
    cy.percySnapshot('closed drawer ')
    cy.percySnapshot('closed drawer layout', { enableLayout: true })
    cy.percySnapshot('closed drawer header', { scope: 'header' })
    cy.get('[aria-label="open drawer"]').click()
    cy.percySnapshot('open drawer', { enableLayout: true })
  })
})