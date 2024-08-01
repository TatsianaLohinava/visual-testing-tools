describe('Dashboard', () => {
  beforeEach(() => {
    cy.eyesOpen({
      appName: 'Dashboard',
      testName: 'visits page'
    })
  })


  afterEach(() => {
    cy.eyesClose()
  })

  it('visits page', () => {
    cy.visit('/')
    //assertion to check if the page is rendered
    cy.eyesCheckWindow({
      tag: "Dashboard page open drawer",
      // matchLevel: 'Ignore Colors'
    });
    cy.get('[aria-label="close drawer"]').click()
    cy.eyesCheckWindow({
      tag: "Dashboard page close drawer",
      matchLevel: 'Ignore Colors'
    });
    cy.get('[aria-label="open drawer"]').click()
  })

})