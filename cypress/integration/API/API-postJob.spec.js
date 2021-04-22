import * as data from '../../fixtures/test-data';

describe('Post Job API', () => {
  before(() => {
    cy.getToken(
      data.account.client.email,
      data.account.client.password,
    ).then(res => {
      Cypress.env('client_token', `Bearer ${res.body.token}`);
      console.log(Cypress.env('client_token'));
    })
  });

  it('Get List current job (private, flex)', () => {
    cy.request({
      method: 'GET',
      url: '/api/v1/clients/posted_jobs.json?filter=current,private_current,flex_current',
      header: {
        Accept: 'application/json, text/plain, */*',
        'x-api-key': Cypress.env('client_token')
      }
    })
    .its('body')
    .then(res => {
      console.log(res);
    })
  })
});