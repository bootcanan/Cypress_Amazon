import { Given, And,Then, When } from "cypress-cucumber-preprocessor/steps";

Given('user is on his account',()=>{

    cy.goToPage('https://www.amazon.co.uk/');
    cy.login('crazyfordata.123@gmail.com','2985.cakobes');

}) 

And('user types nutella on the search input',()=>{
cy.get('#twotabsearchtextbox').type('nutella{enter}');

});

Then('verify all the listed items include nutella',()=>{

cy.xpath('//span[@class="a-size-base-plus a-color-base a-text-normal"]').each((item,index)=>{
    let text = item.text().toLowerCase();
    
    expect(text).to.contain('nutella');

}) 

})
