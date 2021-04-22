import { BaseAction } from '../baseAction';
import * as LoginLocators from './locator';

export class LoginAction extends BaseAction {
  constructor() {
    super();
  }

  /**
   * @method visitPage
   */
  visitPage() {
    cy
      .visit('/');
    this
      .verifyElementExist(
        LoginLocators.MABLE_LOGO
      )
      .verifyTextVisible('Login')
      .verifyTextVisible('Login to manage your Mable account.')
    return this;
  }

  
  /**
   * @method verifyLoginAdminSuccessfully
   */
  verifyLoginSuccessfully(username) {
    cy.wait('@POST_/api/ionic_authentication/sign_in');
    this
      .verifyCurrentURL('/dashboard')
      .getText(LoginLocators.PROFILE_NAME)
      .then(text => {
        expect(text.toLowerCase()).to.equal(username.toLowerCase());
      })

    return this;
  }



  
}