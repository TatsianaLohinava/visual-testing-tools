describe('Dashboard', () => {
  before(() => {
    
  })
  beforeEach(() => {
    cy.eyesOpen({
      appName: 'Dashboard',
      testName: 'visits page',
      browser: [
        {width: 800, height: 600, name: 'firefox'},
        {width: 1024, height: 768, name: 'chrome'},
        {width: 1024, height: 768, name: 'ie11'},
        {
          deviceName: 'iPhone X',
          screenOrientation: 'portrait',
          name: 'chrome' // optional, just to make it explicit this is browser emulation and not a real device. Only chrome is supported for device emulation.
        }
      ]
    })
  })


  afterEach(() => {
    cy.eyesClose()
  })

  it('visits page', () => {
    cy.visit('http://localhost:5173/')
    //assertion to check if the page is rendered
    cy.eyesCheckWindow({
      tag: "Dashboard page open drawer",
      // matchLevel: 'Ignore Colors'
    });
    cy.get('[aria-label="close drawer"]').click()
    cy.eyesCheckWindow({
      tag: "Dashboard page close drawer",
      // matchLevel: 'Ignore Colors'
    });
    cy.get('[aria-label="open drawer"]').click()
  })

})