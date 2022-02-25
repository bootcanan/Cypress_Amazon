import { Given,And, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('user is on {string}',(url)=>{
cy.goToPage(url);

}) 
And('user login with valid data',()=>{

cy.login('crazyfordata.123@gmail.com','2985.cakobes');

})

Then('verify user successfully signin the amazon',()=>{

cy.get('#nav-link-accountList-nav-line-1').should('have.text','Hello, canan')

})


