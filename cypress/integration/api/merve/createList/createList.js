import {Given} from "cypress-cucumber-preprocessor/steps";

before(function(){

    cy.fixture('api-mrv').then(function(data){
        this.data = data
    })

Given('Send POST request for create {string} list and assert it',(listName)=>{
    cy.api({
      url: '/1/lists',
     method:'POST',
     body: {
         name: listName,
         idBoard: this.data.idBoard ,
         key: this.data.key ,
         token: this.data.token
     }
  })
  .its('status').should('eq', 200)
  .then((res) => {
    expect(res.body.name).to.eql(listName);

  })

})

})