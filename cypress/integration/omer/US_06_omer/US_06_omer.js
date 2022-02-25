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
Then('search watch', () => {
    cy.get(allPages.home.search_box).type("watch{enter}")

})
Then('add two random products', () => {
    for (let index = 0; index < 2; index++) {
        
        randomSelect_css(allPages.home.all_products)
        //cy.get(allPages.product.one_time_puchase).click()
        cy.get(allPages.product.Add_to_basket).click()
        cy.wait(5000)
        cy.go(-2)
    }

})
Then('go to basket', () => {
cy.get(allPages.home.Add_to_basket).click()

})
And('verify subtotal calculate correctly', () => {


    var allPrice = [];
    var quantitiy = [];
    var price_times_quantitiy = [];
    var total_expected_subtotal = 0;

    var actual_subtotal = 0;

    // let's get the price
    cy.xpath("//p[@class='a-spacing-mini']").each((item) => {
        let text2 = item.text().replace(/\D/g, "");
        allPrice.push(parseInt(text2));
    });
    // let's get the quantitiy
    cy.xpath("//span[@class='a-dropdown-label']/ .. /span[@class='a-dropdown-prompt']").each((item) => {
        //let text = item.text().replace(/\D/g, "");
        quantitiy.push(parseInt(item));
    });

    // her bir urunun quantitiy miktarina gore toplam fiyati bulundu
    for (let index = 0; index < allPrice.length; index++) {

        price_times_quantitiy.push(allPrice[index] * quantitiy[index])
    }

    // urunlerin toplam quantity miktari bulundu
    for (let index = 0; index < price_times_quantitiy.length; index++) {
        total_expected_subtotal = total_expected_subtotal + price_times_quantitiy[index]

    }

    // actual subtotal bulundu
    cy.get("#sc-subtotal-amount-buybox > span").each((item) => {
        let text = item.text().replace(/\D/g, "");
        actual_subtotal = parseInt(text);
    });
    assert.equal(actual_subtotal, total_expected_subtotal)
})


