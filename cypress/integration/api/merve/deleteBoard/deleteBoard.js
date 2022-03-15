import {Given} from "cypress-cucumber-preprocessor/steps";

before(function(){

    cy.fixture('api-mrv').then(function(data){
        this.data = data
    })


Given('Delete the board using the {string} you created and assert it',(id)=>{
    cy.api({
      url: '/1/boards/' + id + '?key=' +this.data.key + '&token=' + this.data.token,
     method:'DELETE'
 
  })
  .its('status').should('eq', 200)
  })

})  