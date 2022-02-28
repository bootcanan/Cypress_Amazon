Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

import US_010M from '../pages/US_010M'
import {When, And} from "cypress-cucumber-preprocessor/steps";

const page = new US_010M

before(function(){

    cy.fixture('example').then(function(data){
        this.data = data
    })

When('User is on his account',()=>{
   
    page.url()
    cy.login(this.data.validEmail, this.data.validPassword);
    
})

And('User search for nutella',()=>{
   
    cy.search(this.data.searchedProduct);
    
})

And('User adds nutella spoon to the basket',()=>{
   
   page.nutella().click()
   page.addToBasketButton().click()
   page.addedToBasked().should('be.visible')
    
})

And('User search for ball',()=>{
   
    cy.search(this.data.searchedProduct2);
    
})

And('User adds ball to the basket',()=>{
   
   page.ball().click()
   page.addToBasketButton().click()
   page.addedToBasked().should('be.visible')
    
})

And('User goes to the basket',()=>{
   
  page.basket().click()
     
})
 
And('User should be able to see nutella spoon and ball on his basket',()=>{
   
    cy.wait(2000)
    page.productInBasket().should('contain.text', this.data.searchedProduct)   
    cy.wait(2000)
    page.productInBasket2().should('contain.text', this.data.searchedProduct2) 
   })

})