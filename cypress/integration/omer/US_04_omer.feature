Feature: US_004 user able to find word where he/she is searching

 Scenario:TC_004_01 user able to create shopping list
        Given user is on 'https://www.amazon.co.uk/'
        When user clicks on signin button
        And user types valid email
        And user types valid password
        Then verify user successfully signin the amazon
        Then search beans
        And verify all items contains beans
        