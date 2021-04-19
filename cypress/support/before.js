Cypress.on('uncaught:exception', (err) => {
  cy.now(`task`, `error`, err.name);
  cy.now(`task`, `error`, err.message);
  cy.now(`task`, `error`, err.stack);
  false
});