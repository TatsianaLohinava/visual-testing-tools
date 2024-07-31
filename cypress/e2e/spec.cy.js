describe('template spec', () => {
  it('visits page', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[aria-label="close drawer"]').click()
  })
})