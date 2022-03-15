import US_004M from '../pages/US_004M'

import {Given, And} from "cypress-cucumber-preprocessor/steps";

const page = new US_004M

before(function(){

    cy.fixture('example').then(function(data){
        this.data = data
    })

Given('user is on his account',()=>{
 
    page.url()
    cy.login(this.data.validEmail, this.data.validPassword);
    
})

And('user clicks on All tag', () => {
  
    page.all().click()

})

And('user should be able see all departments', () => {
  
    page.seeAll1().click()
    page.seeAll2().click()
    page.headersInAll().should('be.visible')

})

And('verify user will see all the items when click any link under All tag', () => {
  

    var rnd = Math.floor((Math.random() * 10));

    if (rnd >= 3) {

        cy.get(".hmenu-visible > :nth-child(" + rnd + ") > .hmenu-item").click({force: true})
   
    }    

    page.BackTomainMenu().should('be.visible')

})

})
