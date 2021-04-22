// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('forceVisit', (url) => {
  cy.get('body').then((body$) => {
    const appWindow = body$[0].ownerDocument.defaultView;
    const appIframe = appWindow.parent.document.querySelector('iframe' );
    return new Promise((resolve) => {
      appIframe.onload = () => resolve();
      appWindow.location = url;
    });
  });
});

Cypress.Commands.add('getToken', (email, pass) => 
  cy.request({
    method: 'POST',
    url: 'api/ionic_authentication/sign_in',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'x-api-key': Cypress.env('x-api-key'),
      'x-bypass-authentication': Cypress.env('x-bypass-authentication'),
    },
    body: {
      email: email,
      password: pass,
    },
  })
);