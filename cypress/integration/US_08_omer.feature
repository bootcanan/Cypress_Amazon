Feature: US_008 user able to create and delete shopping list

 Scenario:TC_008_01 user able to create shopping list
        Given user is on 'https://www.amazon.co.uk/'
        When user clicks on signin button
        And user types valid email
        And user types valid password
        Then verify user successfully signin the amazon
        Then hover on username
        Then click on create list
        Then create list
        And verify list is exist

    Scenario:TC_008_02 user able to delete shopping list
        Given user is on 'https://www.amazon.co.uk/'
        When user clicks on signin button
        And user types valid email
        And user types valid password
        Then verify user successfully signin the amazon
        Then hover on username
        Then click list which will be deleted
        Then hover on More
        Then click Manage list
        Then scroll down on the popup menu
        Then click on Delete list
        Then click on yes to confirm
        And verify list is not visible





