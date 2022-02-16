
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('user is on {string}',(url)=>{

cy.visit(url);
cy.get('#sp-cc-accept').click();
}) 

Then('verify page is visible on the browser',()=>{


    cy.url().should('include', 'amazon')

}) 