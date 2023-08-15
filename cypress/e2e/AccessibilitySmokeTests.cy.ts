/// <reference types="cypress" />

describe('Smoke Tests', () => {
  it('Has no accessibility violations on page load', () => {
    cy.getInternalLinks().then((urls) => {
      urls.forEach((url) => {
        cy.visit(url);
        cy.injectAxe();
        // Cypress-axe docs: https://github.com/component-driven/cypress-axe
        cy.checkA11y(
          // Context (aka element where this runs)
          undefined,
          // Options
          {
            includedImpacts: ['critical', 'serious']
          },
          // violation callback => this is where we could do some alerting when we have violations
          undefined,
          // skipFailures => we do this for now to have it run through the whole site and log any failures to the console,
          // otherwise it stops on the first failure
          true
        );
      });
    });
  });
});
