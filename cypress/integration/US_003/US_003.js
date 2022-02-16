import { Given,And, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('user is on {string}',(url)=>{

cy.visit(url);
cy.get('#sp-cc-accept').click();
}) 

When('user clicks on signin button',()=>{
    cy.get('#nav-link-accountList').click();


}) 

And('user types invalid email',()=>{

    cy.get('#ap_email').type('crazyfordta.123@gmail.com');
    cy.get('.a-button-inner > #continue').click();

})

Then('verify user can not signIn',()=>{

cy.get('#auth-error-message-box > .a-box-inner').should('include.text','We cannot find an account with that e-mail addres')

})


And('user types valid email',()=>{

    cy.get('#ap_email').type('crazyfordata.123@gmail.com');
    cy.get('.a-button-inner > #continue').click();

})

And('user types invalid password',()=>{

    cy.get('#ap_password').type('298.cakobes');
    cy.get('#signInSubmit').click();
    
    })

    Then ('verify user can not login',()=>{

 cy.get('#auth-error-message-box > .a-box-inner').should('include.text','Your password is incorrect');


    })

   

