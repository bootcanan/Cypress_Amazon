Feature: US_009 user able to add and delete product to shopping list

 Scenario:TC_009_01 user able to add product to shopping list
        Given user is on 'https://www.amazon.co.uk/'
        When user clicks on signin button
        And user types valid email
        And user types valid password
        Then verify user successfully signin the amazon
        Then click on Today`s deal
        Then click on any top deal
        Then click on any product
        Then scroll down to add list
        Then click on Add to list
        And confirm 1 item added to is displayed

    Scenario:TC_009_02 user able to delete product to shopping list
        Given user is on 'https://www.amazon.co.uk/'
        When user clicks on signin button
        And user types valid email
        And user types valid password
        Then verify user successfully signin the amazon
        Then hover on username
        Then click on your list
        Then click list which will be default
        Then click on the three dots over picture which will be removed
        Then click on remove
        And confirm 'Deleted' is visible
        Then reload page
        And confirm 'There are no items in this List.' is visible
        

