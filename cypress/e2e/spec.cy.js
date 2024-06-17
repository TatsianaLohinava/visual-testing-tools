describe('template spec', () => {
  it('visits page', () => {
    cy.visit('http://localhost:5173/');
    cy.percySnapshot(driver, 'dashboard page', {scope: 'header'});
  })
})