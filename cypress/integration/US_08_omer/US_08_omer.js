import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import { generateRandomEmail, generateRandomName } from "../../support/util";
/// <reference types="cypress-xpath" />

const data = 'silinecek list'
Given('user is on {string}', (url) => {

    cy.visit(url);
    cy.get('#sp-cc-accept').click();
})

When('user clicks on signin button', () => {
    cy.get('#nav-link-accountList').click();


})

And('user types valid email', () => {

    cy.get('#ap_email').type('omeryttnc2@gmail.com');
    cy.get('.a-button-inner > #continue').click();

})

And('user types valid password', () => {

    cy.get('#ap_password').type('asdf.123');
    cy.get('#signInSubmit').click();

})

Then('verify user successfully signin the amazon', () => {

    cy.get('#nav-link-accountList-nav-line-1').should('have.text', 'Hello, omer')

})
Then('hover on username', () => {
    cy.get("#nav-link-accountList").trigger('mouseover')

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
And('verify list is exist',  () => {
    cy.wait(3000)
    cy.xpath("//span[contains(@id,'wl-list-entry-title')]").then((item, index) => {
        cy.wrap(item)
            .should('contain.text', data)
    })

})
Then('click list which will be deleted', () => {
    cy.xpath("//span[@class='nav-text' and text()='Your Lists']").click()

    cy.xpath("(//span[contains(@id,'wl-list')])[2]").click()
})
Then('hover on More', () => {
    cy.get("#overflow-menu-popover-trigger > div:nth-child(2)").trigger('mouseover')

})
Then('click Manage list', () => {
    cy.get('#editYourList').click({force: true})

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
