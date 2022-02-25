import { should } from "chai";
import { Given,And, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('user is on his account',()=>{
cy.goToPage('https://www.amazon.co.uk/');
cy.login('crazyfordata.123@gmail.com','2985.cakobes');

})
And('user types nutella on the search input',()=>{

cy.search('nutella{enter}');

})  

And('user adds nutella to his basket',()=>{

    cy.xpath('(//img[@class="s-image"])[2]').click();
    cy.xpath('//input[@id="add-to-cart-button"]').click();
})
And('user search for bread and adds to his basket',()=>{
    cy.get('#twotabsearchtextbox').click();
    cy.search('organic bread{enter}');
    cy.xpath('(//img[@class="s-image"])[1]').click();
    cy.get('#add-to-cart-button').click();

}) 

And('user goes to the basket',()=>{

    cy.get('#sw-gtc > .a-button-inner > .a-button-text').click();
   

})

 Then('verify user should be ble too see total price of these two items on the basket',()=>{

    var firstList = [];
   var secondList = [];
    // let's get the first list of strings
    cy.xpath('//p[@class="a-spacing-mini"]').each((item) => {
        let text = item.text().replace(/\D/g,"");
      firstList.push(parseInt(text));
    })  ;
     cy.xpath('//span[@id="sc-subtotal-amount-buybox"]').then(function($elem) {
            cy.log(parseInt($elem.text().replace(/\D/g,"")));
    cy.xpath('//div[@class="a-row sc-action-links"]//span[@class="a-dropdown-prompt"]').each((quantitiy) => {
        secondList.push(parseInt(quantitiy.text()));
      }).then(() => { 
       

       assert.equal(cy.products(firstList,secondList),$elem.text().replace(/\D/g,""))
    
        
           //console.log(cy.xpath('//span[@id="sc-subtotal-amount-buybox"]'))
        
       /// expect(cy.products(firstList,secondList)).to.equal(parseInt($elem.text().replace(/\D/g,"")));
        

       })
        // when this callback runs, both lists will be populated
             /// expect(cy.products(firstList,secondList)).to.equal(parseInt($elem.text().replace(/\D/g,"")));

    //    let total= cy.xpath('//span[@id="sc-subtot}al-amount-buybox"]').should(($input) => {
    //     const val = $input.text().replace(/\D/g,"");
        //cy.get(cy.xpath('//span[@id="sc-subtotal-amount-buybox"]').invoke('text').then(parseFloat)).should('eq',cy.products(firstList,secondList))
      //  expect(cy.xpath('//span[@id="sc-subtotal-amount-buybox"]').invoke('text').then(parseFloat)).to.equal(cy.products(firstList,secondList) )
       // expect( cy.products(firstList,secondList)).to.equal(parseInt(total));
      })

    
    })