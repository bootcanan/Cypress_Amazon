Feature: US_007 user able to click and locate correct page

 Scenario:TC_007_01 user able to create shopping list
        Given user is on 'https://www.amazon.co.uk/'
        When user clicks on signin button
        And user types valid email
        And user types valid password
        Then verify user successfully signin the amazon
        Then go to bottom of the page
        Then click on random page
        And verify you are on correct page