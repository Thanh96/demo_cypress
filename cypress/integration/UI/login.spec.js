/// <reference types="cypress" />

import { LoginAction } from '../../page-obj/LoginPage/action';
import * as LoginLocators from '../../page-obj/LoginPage/locator';

import * as data from '../../fixtures/test-data';

const loginPage = new LoginAction();

describe('Login page', () => {

  it('Login page', () => {
    loginPage
      .log('Visit home page')
      .visitPage()

      .log(`Input the Email field ${data.account.client.email}`)
      .inputTextField(
        LoginLocators.EMAIL_INPUT,
        data.account.client.email,
      )

      .log(`Input the Pass field ${data.account.client.password}`)
      .inputTextField(
        LoginLocators.PASS_INPUT,
        data.account.client.password,
      )

      .log('Click submit btn: Login')
      .clickElement(
        LoginLocators.LOGIN_SUBMIT,
      )

      .log('Verify user login successfully')
      .verifyLoginSuccessfully(
        data.account.client.name,
      )
  })
})