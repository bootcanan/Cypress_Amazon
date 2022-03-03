import { expect } from "chai";
import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import { Hook } from "mocha";
import { randomSelect_css, randomSelect_xpath } from "../../../support/util";
/// <reference types="cypress-xpath" />
const user = require('../../../fixtures/user.json');
const amazon = require('../../../fixtures/amazon.json');
const allPages = require('../../../fixtures/allpages.json');

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

    cy.get(amazon.username_text).should('have.text', 'Hello, omer')

})
Then('click on All to reach sub categories', () => {
cy.get(allPages.home.all_for_subcat).click()

})
And('verify subcategories', () => {

    cy.wait(2000);
    cy.get('#nav-hamburger-menu').click({force: true});

  
    cy.xpath('//a[@data-menu-id="13"]//div').invoke('text').then((text1) => {
      cy.log(text1);
  
    });
    //  console.log(text);
    const allLinkText = ["trending",
      "Best Sellers",
      "New Releases",
      "Movers and Shakers",
      "", "digital content and devices",
      "Prime Video",
      "Amazon Music",
      "Apps for Android",
      "Echo, Alexa & Smart Home",
      "Fire TV",
      "Fire Tablets",
      "Kindle E-readers & Books",
      "Audible Audiobooks", "",
      "shop by department",
      "Books",
      "Films, TV, Music & Games",
      "Electronics & Computers",
      'Home, Garden, Pets & DIY, Smart Home',
      "see allsee less", "",
      "programs & features",
      "Gift Cards & Top Up",
      "Find a Gift",
      "Handmade",
      "Amazon Launchpad",
      "see allsee less",
      "",
      "help & settings",
      "Your Account",
      "Currency Settings",
      "Customer Service",
      "Sign Out"];
  
    cy.get('#hmenu-content > .hmenu-visible>li').each((item, index, list) => {    
      expect(allLinkText[index]).to.contain(Cypress.$(item).text());
    })
  })




