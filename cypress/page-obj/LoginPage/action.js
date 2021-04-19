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
        LoginLocators.SYMPLE_LOGO
      )
      .verifyElementContainsText(
        LoginLocators.LOGIN_BTN,
        'Log in'
      )
      .closeLaunchPopupIfExist()
    return this;
  }

  /**
   * @method closeLaunchPopupIfExist
   */
  closeLaunchPopupIfExist() {
    this
      .log('Close the launch popup if exist')
      .checkElementIfExist(LoginLocators.LAUNCH_POPUP)
      .then(res => {
        if(res) {
          this.clickElement(LoginLocators.CLOSE_LAUCH_ICON)
        }
      })

    return this;

  }
  
  /**
   * @method verifyLoginAdminSuccessfully
   */
  verifyLoginAdminSuccessfully(username) {
    this
      .verifyCurrentURL('/admin')

    cy.wait('@GET_api/chart/job')

    this
      .getText(LoginLocators.USERNAME_DROPDOWN)
      .then(text => {
        expect(text.toLowerCase()).to.equal(username.toLowerCase());
      })

    return this;
  }



  
}