import { Given, And,Then, When } from "cypress-cucumber-preprocessor/steps";

Given('user is on his account',()=>{

    cy.goToPage('https://www.amazon.co.uk/');
    cy.login('crazyfordata.123@gmail.com','2985.cakobes');

}) 

And('user types nutella on the search input',()=>{
cy.get('#twotabsearchtextbox').type('nutella{enter}');

   // expect(item[index]).to.contain.text('nutella', {matchCase:false})
  //cy.wrap(item).should('contain.text','nutella',)
    //expect(Cypress.$(item).text()).to.include('Nutella');
});

Then('verify all the listed items include nutella',()=>{

cy.xpath('//span[@class="a-size-base-plus a-color-base a-text-normal"]').each((item,index)=>{
    let text = item.text().toLowerCase();
    
    expect(text).to.contain('nutella');

}) 
// cy.get('#hmenu-content > .hmenu-visible>li').each((item,index,list)=>{
//     expect(list).to.have.length(34);
//     ///cy.wrap(item).should('contain.text',allLinkText[index]);
//     //cy.wrap(item).should('contain.text',allLinkText[index]);
    
//     //expect(Cypress.$(item).text()).to.eq(allLinkText[index]);
//     expect(allLinkText[index]).to.contain(Cypress.$(item).text());
//     //console.log(list);
//     })
})
