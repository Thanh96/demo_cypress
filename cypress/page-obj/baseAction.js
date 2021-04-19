export class BaseAction {

  /**
   * @method log
   * @param {string} text 
   */
  log(mess) {
    cy.log(`*** ${mess} ***`);

    return this;
  }

  /**
   * @method clickElement
   * @param {string} selector
   * @param {boalean} isForce
   * @param {number} position
   */
  clickElement(selector, isForce = false, position) {
    if (position) {
      cy.get(selector).eq(position).should('exist').click({ force: isForce });
    } else {
      cy.get(selector).should('exist').click({ force: isForce });
    }

    return this;
  }

  /**
   * @method clickOnText
   * @param {string} text
   * @param {boolean} isForce
   */
  clickOnText(text, isForce = false) {
    cy.get('body').contains(text).should('exist').click({ force: isForce });
  }

  /**
   * @method clickElementOnText
   * @param {string} selector
   * @param {string} text
   * @param {boolean} isForce
   */
  clickElementOnText(selector, text, isForce = false) {
    cy.get(selector).contains(text).should('exist').click({ force: isForce });

    return this;
  }

  /**
   * @method inputTextField
   * @param {string} selector
   * @param {string} text
   * @param {boolean} isForce
   * @param {number} position
   */
  inputTextField(selector, text, isForce = false, position) {
    if (position) {
      cy.get(selector)
        .eq(position)
        .should('exist')
        .clear({ force: isForce })
        .type(text, { force: isForce });
    } else {
      cy.get(selector)
        .should('exist')
        .clear({ force: isForce })
        .type(text, { force: isForce });
    }

    return this;
  }

  /**
   * @method clearTextField
   * @param {string} selector
   * @param {boolean} isForce
   */
  clearTextField(selector, isForce = false) {
    cy.get(selector).should('exist').clear({ force: isForce });

    return this;
  }

  /**
   * @method selectDropdown
   * @param {string} selector
   * @param {string} value
   */
  selectDropdown(selector, value) {
    cy.get(selector).should('exist').select(value, { force: true });
    
    return this;
  }

  /**
   * @method verifyElementContainsText
   * @param {string} selector
   * @param {string} text
   * @param {number} position
   */
  verifyElementContainsText(selector, text, position) {
    if (position) {
      cy.get(selector).eq(position).contains(text).should('exist');
    } else {
      cy.get(selector).contains(text).should('exist');
    }

    return this;
  }

  /**
   * @method verifyCurrentURL
   * @param {string} value
   */
  verifyCurrentURL(value) {
    cy.wait(500)
      .url()
      .then((url) => expect(url).to.include(value));
    
    return this;
  }

  /**
   * @method verifyTextExist
   * @param {string} text
   */
  verifyTextExist(text) {
    cy.get('body').contains(text).should('exist');

    return this;
  }

  /**
   * @method verifyTextVisible
   * @param {string} text
   */
  verifyTextVisible(text) {
    cy.get('body').contains(text).should('be.visible');

    return this;
  }

  /**
   * verifyElementVisible
   * @param {string} selector
   */
  verifyElementVisbile(selector) {
    cy.get(selector).should('be.visible');

    return this;
  }

  /**
   * verifyElementExist
   * @param {string} selector 
   */
  verifyElementExist(selector) {
    cy.get(selector).should('exist');

    return this;
  }

    /**
   * @method verifyTextNotExist
   * @param {string} text
   */
  verifyTextNotExist(text) {
    cy.get('body').contains(text).should('not.exist');

    return this;
  }

  /**
   * @method verifyTextVisible
   * @param {string} text
   */
  verifyTextNotVisible(text) {
    cy.get('body').contains(text).should('not.be.visible');

    return this;
  }

  /**
   * @method verifyElementVisible
   * @param {string} selector
   */
  verifyElementNotVisbile(selector) {
    cy.get(selector).should('not.be.visible');

    return this;
  }

  /**
   * @method verifyElementExist
   * @param {string} selector 
   */
  verifyElementNotExist(selector) {
    cy.get(selector).should('not.exist');

    return this;
  }

  /**
   * @method checkElementIfExist
   * @param {string} selector 
   */
  checkElementIfExist(selector) {
    return cy.get('body')
      .then($body => !!$body.find(selector).length)

  }

  /**
   * @method getText
   * @param {string} selector 
   */
  getText(selector) {
    return cy.get(selector)
      .invoke('text')
  }

  /**
   * @method getAttribute
   * @param {string} selector 
   * @param {string} type 
   */
  getAttribue(selector, type) {
    return cy.get(selector)
      .invoke('attr', type)
      .then(res => res)
  }
}
