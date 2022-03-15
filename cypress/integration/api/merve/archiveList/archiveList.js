import {Given} from "cypress-cucumber-preprocessor/steps";

before(function(){

    cy.fixture('api-mrv').then(function(data){
        this.data = data
    })


Given('Archive the list using the {string} you created and assert it',(id)=>{
    cy.api({
      url: '/1/lists/' + id + '/closed?key=' +this.data.key + '&token=' + this.data.token + '&value=' + this.data.value,
     method:'PUT'
 
  })
  .its('status').should('eq', 200)
  })

})  