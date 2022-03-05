import {Given} from "cypress-cucumber-preprocessor/steps";

Given('Delete the board using the {string} {string} and {string} you created and assert it',(id , key , token)=>{
    cy.api({
      url: '/1/boards/' + id + '?key=' +key + '&token=' + token,
     method:'DELETE'
 
  })
  .its('status').should('eq', 200)
})