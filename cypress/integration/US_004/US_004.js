import { expect } from "chai";
import { Given} from "cypress-cucumber-preprocessor/steps";



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
   let text= cy.get('.hmenu-visible > :nth-child(20) > .hmenu-item>div').invoke('text');
   
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
    "Home, Garden, Pets & DIY",
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
cy.wrap(item).should('contain.text',allLinkText[index]);
//expect(Cypress.$(item).text()).to.eq(allLinkText[index]);

console.log(list);
})
})
