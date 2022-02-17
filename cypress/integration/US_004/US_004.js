import { expect } from "chai";
import { Given} from "cypress-cucumber-preprocessor/steps";

/// <reference types="cypress-xpath" />

Given('user is on his account',()=>{
cy.visit('https://www.amazon.co.uk/');
cy.get('#sp-cc-accept').click();
 cy.get('#nav-link-accountList').click();
cy.get('#ap_email').type('crazyfordata.123@gmail.com');
    cy.get('.a-button-inner > #continue').click();
    cy.get('#ap_password').type('2985.cakobes');
cy.get('#signInSubmit').click();
}) 

And('User clicks on All tag',()=>{
    cy.wait(2000);
    cy.get('#nav-hamburger-menu').click(); 
   
    // cy.get('body').then(($body) => {
    //   const dynamicTest;
    //     // synchronously ask for the body's text
    //     // and do something based on whether it includes
    //     // another string
    //     if ($body.text().includes('Home, Garden, Pets & DIY')) {
    //       // yup found it
    //       dynamicTest='Home, Garden, Pets & DIY';
    //     } else {
    //       // nope not here
    //       dynamicTest='Smart Home'; 
    //     }
       
    //   })

     
  
  cy.xpath('//a[@data-menu-id="13"]//div').invoke('text').then((text1)=>{
cy.log(text1);

  });
 //  console.log(text);
const allLinkText=["trending",
    "Best Sellers",
    "New Releases",
    "Movers and Shakers",
   "","digital content and devices",
    "Prime Video",
    "Amazon Music",
    "Apps for Android",
    "Echo, Alexa & Smart Home",
    "Fire TV",
    "Fire Tablets",
    "Kindle E-readers & Books",
    "Audible Audiobooks","",
    "shop by department",
    "Books",
    "Films, TV, Music & Games",
    "Electronics & Computers",
    'Home, Garden, Pets & DIY, Smart Home',
    "see allsee less","",
    "programs & features",
    "Gift Cards & Top Up",
    "Find a Gift",
    "Handmade",
    "Amazon Launchpad",
    "see allsee less",
    "",
    "help & settings",
    "Your Account",
    "Currency Settings",
    "Customer Service",
    "Sign Out"];

cy.get('#hmenu-content > .hmenu-visible>li').each((item,index,list)=>{
expect(list).to.have.length(34);
///cy.wrap(item).should('contain.text',allLinkText[index]);
//cy.wrap(item).should('contain.text',allLinkText[index]);

//expect(Cypress.$(item).text()).to.eq(allLinkText[index]);
expect(allLinkText[index]).to.contain(Cypress.$(item).text());
//console.log(list);
})
})
