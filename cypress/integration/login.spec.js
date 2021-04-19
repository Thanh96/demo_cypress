/// <reference types="cypress" />

import { LoginAction } from '../page-obj/LoginPage/action';
import * as LoginLocators from '../page-obj/LoginPage/locator';

import * as data from '../fixtures/test-data';

const loginPage = new LoginAction();

describe('Login page', function() {

  it('Login page', function() {
    loginPage
      .log('Visit home page')
      .visitPage()

      .log('Click Login in btn')
      .clickElementOnText(
        LoginLocators.LOGIN_BTN,
        'Log in'
      )

      .log(`Input the Email field ${data.account.admin.email}`)
      .inputTextField(
        LoginLocators.EMAIL_INPUT,
        data.account.admin.email,
      )

      .log(`Input the Pass field ${data.account.admin.password}`)
      .inputTextField(
        LoginLocators.PASS_INPUT,
        data.account.admin.password,
      )

      .log('Click submit btn: Login')
      .clickElementOnText(
        LoginLocators.LOGIN_SUBMIT,
        ' Login'
      )

      .log('Verify user login successfully')
      .verifyLoginAdminSuccessfully(
        data.account.admin.name,
      )
  
  })
})