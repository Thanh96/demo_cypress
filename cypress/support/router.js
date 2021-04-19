beforeEach("Set up routes", () => {
  cy.log('Settig up routes for XHR requests')
    .intercept('GET', '/profiles/search?*').as('GET_/profiles/search')
    .intercept('GET', '/api/chart/job?*').as('GET_api/chart/job')
});