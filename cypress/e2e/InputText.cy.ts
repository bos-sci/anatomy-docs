/// <reference types="cypress" />

describe("InputText", () => {
  beforeEach(() => {
    // This would need to change based on environment.
    cy.visit("http://localhost:3000/components/form-controls/text-input");
    cy.injectAxe();
  });
  xit("Has no violations on load", () => {
    cy.get("#textInputDefault").should("be.visible");
    cy.checkA11y();
  });
  it("First input has no violations", () => {
    cy.get("#textInputDefault").should("be.visible");
    cy.checkA11y("#textInputDefault");
  });
  it("Has no violation when interacted with", () => {
    // Warning: If you're using real events, they work on Chrome only.
    // Other tests can run in Firefox.
    cy.get("#textInputDefault").realClick().should("be.focused");
    cy.realType("testing input");
    cy.checkA11y("#textInputDefault");
    cy.realPress("Tab");
    cy.checkA11y("#textInputDefault");
  });
});