Feature: US_005 user able to create filteration and sort

    Scenario:TC_005_01 user able to create filteration
        Given user is on 'https://www.amazon.co.uk/'
        When user clicks on signin button
        And user types valid email
        And user types valid password
        Then verify user successfully signin the amazon
        Then search beans
        Then click on Free UK Delivery by amazon
        And verify is clicked
        And all products contains Free Delivery in their description



    Scenario:TC_005_02 user able to sort
        Given user is on 'https://www.amazon.co.uk/'
        When user clicks on signin button
        And user types valid email
        And user types valid password
        Then verify user successfully signin the amazon
        Then search beans
        Then click on sort by
        Then select price low to high
        And verify product price are low from high

