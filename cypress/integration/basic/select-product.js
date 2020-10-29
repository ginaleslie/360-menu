/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("this test is testing the add product button", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8000")
  })
  it("should fetch the button", () => {
    cy.get(".addProductBtn").click()
  })
})
