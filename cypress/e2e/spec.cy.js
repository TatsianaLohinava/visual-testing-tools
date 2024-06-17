describe('template spec', () => {
  it('visits page', () => {
    cy.visit('http://localhost:5173/');
    cy.percySnapshot('dashboard page', { enableLayout: true });
    cy.percySnapshot('dashboard header', { scope: 'header', testCase: 'header' });
  })
})