import { expect } from "chai";
import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import { Hook } from "mocha";
import { randomSelect_css, randomSelect_xpath } from "../../support/util";
/// <reference types="cypress-xpath" />
const user = require('../../fixtures/user.json');
const amazon = require('../../fixtures/amazon.json');
const allPages = require('../../fixtures/allpages.json');

Given('user is on {string}', (url) => {
    cy.visit(url);
    cy.get('#sp-cc-accept').click();
})

When('user clicks on signin button', () => {
    cy.get(amazon.sign_in_button).click();


})

And('user types valid email', () => {
    cy.get(amazon.type_username).type(user.username);
    cy.get(allPages.home.click_username).click();

})

And('user types valid password', () => {

    cy.get(amazon.type_password).type(user.password);
    cy.get(amazon.click_password).click();

})

Then('verify user successfully signin the amazon', () => {

    cy.get(amazon.username_text).should('have.text', 'Hello, omer').type('{end}')

})
Then('go to bottom of the page', () => {

})
Then('click on random page', () => {
//randomSelect_css(allPages.home.bottom_links)
cy.get(allPages.home.bottom_links).then(($li) => {
    const items = $li.toArray()
    return Cypress._.sample(items)
}).then(($li)=>{
    expect(Cypress.dom.isJquery($li), 'jQuery element').to.be.true
    let title = $li.text()
    cy.log(`you picked "${$li.text()}"`)
}).click()

//title.invoke('text').then((text) => {
  //  var splitText = text.split(' ')[1]
    //expect(splitText).to.contain(cy.Cypress.)
//})
//title.spl
})
And('verify you are on correct page', () => {


})



