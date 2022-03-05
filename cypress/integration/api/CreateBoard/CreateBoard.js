import {Given} from "cypress-cucumber-preprocessor/steps";

Given('Send POST request for create "dnm" board and assert it',()=>{
    cy.api({
      url: '/1/boards',
     method:'POST',
     body: {
         name: "cypress",
      key: "a0b69b889fdfd0fda0e2acd057589255",
      token: "93e0fa67c3cd67a91cc2491dfdee5eda860c76e49b1ba62d24db071ae2251b7a"
     }
  })
  .its('status').should('eq', 200)
})