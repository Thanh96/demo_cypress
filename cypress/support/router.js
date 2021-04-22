beforeEach("Set up routes", () => {
  cy.log('Settig up routes for XHR requests')
    .intercept('POST', '/api/ionic_authentication/sign_in.json?*').as('POST_/api/ionic_authentication/sign_in');
});