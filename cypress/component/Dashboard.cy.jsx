import Dashboard from "../../src/Dashboard"
import {heading} from "../fixtures/data.json"

describe('Dashboard.cy.jsx', () => {
  it('has dashboard heading', () => {
    cy.mount(<Dashboard />)
    cy.get('h1').should('have.text', heading)
  })
})