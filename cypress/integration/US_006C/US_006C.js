Given('user is on his account',()=>{

  cy.goToPage('https://www.amazon.co.uk/');
  cy.login('crazyfordata.123@gmail.com','2985.cakobes');

}) ;

And('user types nutella on the search input',()=>{
  cy.wait(2000);
    cy.get('#twotabsearchtextbox').type('nutella{enter}');
    // cy.xpath('//span[@class="a-size-base-plus a-color-base a-text-normal"]').each((item,index)=>{
    //     let text = item.text().toLowerCase();
        
    //     expect(text).to.contain('nutella');
       // expect(item[index]).to.contain.text('nutella', {matchCase:false})
      //cy.wrap(item).should('contain.text','nutella',)
        //expect(Cypress.$(item).text()).to.include('Nutella');
    });
    

  And ('user clicks delivery date by tommorow',()=>{

    cy.xpath("//span[text()='Free UK Delivery by Amazon']").click();

  })
Then('verify user sees only free delivery nutella products on the listed items',()=>{

////cy.xpath('div[@class="a-row"]//span[@class="a-color-base"]');
cy.xpath('//div[@class="a-row a-size-base a-color-secondary s-align-children-center"]//div[@class="a-row"]//span[@class="a-color-base"]').each((item,index)=>{
    let text = item.text().toLowerCase();
    
    expect(text).to.contain('free delivery');
  
}) 
}) ;

And('user sorts Price: High to Low',()=>{
  cy.get('#a-autoid-0-announce').click();
  
  cy.get('#s-result-sort-select_1').click();
  //.xpath('//span[@id="a-autoid-5"]').click();
  //cy.xpath('//span[@class="a-price"]')
})

Then('verify user sees price of products High to Low',()=>{
   let prices = []
  cy.xpath('//div[@class="s-main-slot s-result-list s-search-results sg-row"]//span[@class="a-price"]').each((item,index)=>{
  let text = item.text().replace(/\D/g,"").slice(0,((item.text().replace(/\D/g,"").length)/2));
  Cypress.config("waitAfterEachCommand", 2000)
  cy.wait(1000);
   cy.log(text);
//£60.49£60.49

  prices.push(parseInt(text));
  let firstArray=prices;
  prices.sort();


   expect(firstArray, 'cells are sorted 📈').to.deep.equal(prices)
 
  cy.log(firstArray);
  cy.log(prices);
//     expect(text).to.have.ordered.members(text);
//     //expect(text).to.contain('nutella');
}) 

})
