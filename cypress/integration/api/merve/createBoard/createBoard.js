import {Given} from "cypress-cucumber-preprocessor/steps";

before(function(){

    cy.fixture('api-mrv').then(function(data){
        this.data = data
    })

Given('Send POST request for create {string} board and assert it',(boardName)=>{
    cy.api({
      url: '/1/boards',
     method:'POST',
     body: {
         name: boardName,
      key: this.data.key ,
      token: this.data.token
     }
  })
  .its('status').should('eq', 200)
  .then((res) => {
    expect(res.body.name).to.eql(boardName);

  })

})

})