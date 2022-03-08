import {Given} from "cypress-cucumber-preprocessor/steps";

before(function(){

    cy.fixture('api-mrv').then(function(data){
        this.data = data
    })

Given('Send POST request for create {string} card and assert it',(cardName)=>{
    cy.api({
      url: '/1/cards',
      method:'POST',
      body: {
         idList : this.data.idList,
         key: this.data.key ,
         token: this.data.token ,
         name : cardName 
     }
  })
  .its('status').should('eq', 200)

})

})