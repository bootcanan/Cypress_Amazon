Given('User is on his account',()=>{


    cy.goToPage('https://www.amazon.co.uk/');
cy.login('crazyfordata.123@gmail.com','2985.cakobes');
}) 


And ('User clicks on one of the links on footer div',()=>{
    cy.get('.navFooterDescLine').scrollIntoView() // Scrolls 'footer' into view
cy.xpath('//tbody//td[@class="navFooterDescItem"]').each((item)=>{
      item.click();


})
})
