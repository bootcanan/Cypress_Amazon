class US_004M {

    url() {
        return  cy.visit('https://www.amazon.co.uk/')
    }
    all() {
        return cy.get('#nav-hamburger-menu')
    }
    seeAll1() {
        return cy.get(':nth-child(17) > .hmenu-compressed-btn')
    }
    seeAll2() {
        return cy.get(':nth-child(25) > .hmenu-compressed-btn')
    }
    headersInAll() {
        return cy.get('#hmenu-content > .hmenu-visible')
    }
    BackTomainMenu() {
        return cy.get('.hmenu-visible > :nth-child(1) > .hmenu-item > div')
    }
 

}
export default US_004M