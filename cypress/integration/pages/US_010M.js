class US_010M {

    url() {
        return  cy.visit('https://www.amazon.co.uk/')
    }
    nutella() {
        return cy.get('[data-asin="B09D3M24K5"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus')
    }
    addToBasketButton () {
        return cy.get('#add-to-cart-button')
    }
    addedToBasked() {
        return cy.get('.a-padding-medium')
    }
    ball() {
        return cy.get('[data-asin="B07RP2WR5B"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus')
    }
    basket(){
        return cy.get('#nav-cart')
    }
    productInBasket() {
        return cy.get('#sc-item-C337b7e35-86ee-426c-a12c-3f8043ebebd0 > .sc-list-item-content > .a-spacing-base > .a-span10 > .a-fixed-left-grid > .a-fixed-left-grid-inner > .a-col-right > .a-unordered-list > :nth-child(1) > .a-list-item > .a-link-normal > .a-color-base > .a-truncate > .a-truncate-full')
    }
    productInBasket2(){
        return cy.get('#sc-item-C11bc69bc-e00d-4812-8f21-33556eda1eea > .sc-list-item-content > .a-spacing-base > .a-span10 > .a-fixed-left-grid > .a-fixed-left-grid-inner > .a-col-right > .a-unordered-list > :nth-child(1) > .a-list-item > .a-link-normal > .a-color-base > .a-truncate > .a-truncate-full')
    }


}
export default US_010M