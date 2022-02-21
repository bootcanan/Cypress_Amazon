import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import { Hook } from "mocha";
/// <reference types="cypress-xpath" />
const user = require('../../fixtures/user.json');
const amazon = require('../../fixtures/amazon.json');
const allPages = require('../../fixtures/allpages.json');
const data = "sil"
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
Then('click on create list', () => {
    cy.get("#nav-al-wishlist > a:nth-child(5) > span").click()

})
Then('create list', () => {
    //cy.get("#createList").click()
    cy.get("#list-name").clear()

    cy.get("#list-name").type(data)
    cy.get("#wl-redesigned-create-list > span > span > input").click()



})
And('verify list is exist', () => {
    cy.wait(3000)
    cy.xpath("//span[contains(@id,'wl-list-entry-title')]").then((item, index) => {
        cy.wrap(item)
            .should('contain.text', data)
    })

})
Then('click list which will be deleted', () => {
    cy.xpath("//span[@class='nav-text' and text()='Your Lists']").click()


    cy.contains(data).click()


})
Then('hover on More', () => {
    cy.get("#overflow-menu-popover-trigger > div:nth-child(2)").trigger('mouseover')

})
Then('click Manage list', () => {
    cy.get('#editYourList').click({ force: true })

})
Then('scroll down on the popup menu', () => {
    cy.get('#list-settings-container > span > span > span > input').scrollIntoView()

})
Then('click on Delete list', () => {

    cy.get("#list-settings-container > span > span > span > input").click()
})
Then('click on yes to confirm', () => {
    cy.get("#list-delete-confirm > span > input").click()

})
And('verify list is not visible', () => {
    cy.wait(3000)
    cy.xpath("//span[contains(@id,'wl-list-entry-title')]").then((item, index) => {
        cy.wrap(item)
            .should('not.contain.text', data)

    })
})
