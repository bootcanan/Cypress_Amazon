Feature: US_006 user able to add random product to cart and total price should be calculate correctly

    Scenario:TC_006_01 user able to create shopping list
        Given user is on 'https://www.amazon.co.uk/'
        When user clicks on signin button
        And user types valid email
        And user types valid password
        Then verify user successfully signin the amazon
        Then search watch
        Then add two random products
        Then go to basket
        And verify subtotal calculate correctly


