describe('template spec', () => {
  it('visits page', () => {
    cy.visit('http://localhost:5173/');
    cy.percySnapshot('dashboard page', {scope: 'header'});
  })
})