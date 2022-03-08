import {Given} from "cypress-cucumber-preprocessor/steps";

before(function(){

    cy.fixture('api-mrv').then(function(data){
        this.data = data
    })

Given('Send POST request for create {string} attachment and assert it',(attachmentName)=>{
    cy.api({
      url: '/1/cards/' + this.data.idCard + '/attachments?',
      method:'POST',
      body: {
         url: this.data.attachmentUrl,
         key: this.data.key ,
         token: this.data.token ,
         name : attachmentName 
     }
  })
  .its('status').should('eq', 200)

})

})