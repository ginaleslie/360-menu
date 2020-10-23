/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("this test is testing the count button", () => {
  //   beforeEach(() => {
  //     cy.visit("http://localhost:8000")
  //   })
  it("should have a button showing a plus symbol", () => {
    cy.get("[type=button]").eq(1).should("contain", "+")
  })
  it("should have a button showing a minus symbol", () => {
    cy.get("[type=button]").eq(0).should("contain", "-")
  })
  it("should show a number area containing a number", () => {
    cy.get("span").should("contain", "0")
  })
  it("should add 3 to the counter", () => {
    cy.get("[type=button]").eq(1).click().click().click()
  })
  it("should disable button if range end is reached (10)", () => {
    _.times(10, () => cy.get("[type=button]").eq(1).click())
    cy.get("[type=button]").eq(1).should("be.disabled")
  })
  //   it("should subtract 2 from the counter", () => {
  //     cy.visit("http://localhost:8000")
  //     cy.get("[type=button]").eq(0).click()
  //   })
})
