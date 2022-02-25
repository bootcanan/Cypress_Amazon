import { expect } from "chai";
import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import { Hook } from "mocha";
import { randomSelect_xpath } from "../../../support/util";
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
Then('hover on username', () => {
    cy.get(amazon.hover_over_place_to_get_manage_list).trigger('mouseover')

})
Then('click on Today`s deal', () => {
    cy.get(allPages.product.todaysDeal).click()
})
Then('click on any top deal', () => {
   // cy.xpath(allPages.product.x_list_dealProducts_main).first().click()
randomSelect_xpath(allPages.product.x_list_dealProducts_main)
})
Then('click on any product', () => {
    // cy.xpath(allPages.product.x_list_dealProducts_side).first().click()
    // random nasil tiklanir sor
    randomSelect_xpath(allPages.product.x_list_dealProducts_side)

})
Then('scroll down to add list', () => {
    cy.get(allPages.product.add_to_list).scrollIntoView()

})
Then('click on Add to list', () => {
    cy.get(allPages.product.add_to_list).click()

})
Then('confirm 1 item added to is displayed', () => {

    cy.get(allPages.product.add_to_list_assertion.bir).should('contain.text', "1")
    cy.get(allPages.product.add_to_list_assertion.added_to).should('contain.text', "added to")
    cy.get(allPages.product.add_to_list_assertion.item).should('contain.text', "item")
})
Then('click on your list', () => {
    cy.get(allPages.list.your_list).click()
})
Then('click list which will be default', () => {

})
Then('click on the three dots over picture which will be removed', () => {
    cy.xpath(allPages.list.x_three_dot).click()
})
Then('click on remove', () => {
cy.wait(2000)
    cy.xpath(allPages.list.x_remove).click()
})
Then('confirm {string} is visible', (data) => {
    cy.get(allPages.list.deleted).scrollIntoView().should('contain.text', data)
})
Then('reload page', () => {
    cy.reload()
})
And('confirm {string} is visible', (data) => {
    cy.type({pageUp})
    cy.get(allPages.list.hover_over_place_to_get_manage_list).scrollTo('top').should('contain.text', data)
})
