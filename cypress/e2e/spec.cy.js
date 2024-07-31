describe('template spec', () => {
  it('toggles drawer', () => {
    cy.visit('http://localhost:5173/')
    cy.takeSnapshot()
    cy.get('[aria-label="close drawer"]').click()
    cy.takeSnapshot()
    cy.get('[aria-label="open drawer"]').click()
  })
})