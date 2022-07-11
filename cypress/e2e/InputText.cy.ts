/// <reference types="cypress" />

describe('InputText', () => {
    beforeEach(() => {
        // This would need to change based on environment.
        cy.visit('http://localhost:3000/components/form-controls/text-input');
        cy.injectAxe();
    });
})