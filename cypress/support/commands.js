// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('sort', arr=>{
return  arr.sort((a, b) => a - b);

  
})


Cypress.Commands.add('goToPage', url=>{

    cy.visit(url);
    cy.get('#sp-cc-accept').click();
})

Cypress.Commands.add('login', (email, password) => { 

cy.get('#nav-link-accountList').click();
cy.get('#ap_email').type(email);
cy.get('.a-button-inner > #continue').click();
cy.get('#ap_password').type(password);
cy.get('#signInSubmit').click();
 })

 Cypress.Commands.add('search',item=>{
    
    cy.get('#twotabsearchtextbox').type(item);
    cy.get('#nav-search-submit-button').click()

 });
 Cypress.Commands.add('addItems', (element) => {
     let result=0;
    
      return   result+=element;
     

  })
  Cypress.Commands.add('products', (arr1,arr2) => {
   
    
        var sum = 0;
        for(let i=0; i < arr1.length; i++) {
           var product = (arr1[i] * arr2[i]);
           sum += product;
        };
        return sum;
     

  
 })

    


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
