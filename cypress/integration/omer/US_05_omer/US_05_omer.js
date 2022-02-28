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
    //cy.get('#sp-cc-accept').click();
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
Then('search beans', () => {
    cy.get(allPages.home.search_box).type("beans{enter}")

})
Then('click on Free UK Delivery by amazon', () => {
    cy.xpath(allPages.product.Free_UK_Delivery).click()
})
And('verify is clicked', () => {

})
And('all products contains Free Delivery in their description', () => {
    cy.get(allPages.product.description).then((item, index) => {
        cy.wrap(item).should('contain.text', 'FREE Delivery')


    })
})
Then('click on sort by', () => {
    cy.xpath(allPages.product.shortby).click()

})
Then('select price low to high', () => {
    cy.get(allPages.product.low_to_high).click()

})
And('verify product price are low from high', () => {
    let prices = []
    cy.xpath('//div[@class="s-main-slot s-result-list s-search-results sg-row"]//span[@class="a-price"]').each((item, index) => {
        let text = item.text().replace(/\D/g, "").slice(0, ((item.text().replace(/\D/g, "").length) / 2));
        Cypress.config("waitAfterEachCommand", 2000)
        cy.wait(1000);
        prices.push(parseInt(text));
        let firstArray = prices;
        prices.sort();
        expect(firstArray, 'cells are sorted 📈').to.deep.equal(prices)
    })
})







