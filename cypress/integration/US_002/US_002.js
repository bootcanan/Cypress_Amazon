import { Given,And, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('user is on {string}',(url)=>{

cy.visit(url);
cy.get('#sp-cc-accept').click();
}) 

When('user clicks on signin button',()=>{
    cy.get('#nav-link-accountList').click();


}) 

And('user types valid email',()=>{

    cy.get('#ap_email').type('crazyfordata.123@gmail.com');
    cy.get('.a-button-inner > #continue').click();

})

And('user types valid password',()=>{

cy.get('#ap_password').type('2985.cakobes');
cy.get('#signInSubmit').click();

})

Then('verify user successfully signin the amazon',()=>{

cy.get('#nav-link-accountList-nav-line-1').should('have.text','Hello, canan')

})


