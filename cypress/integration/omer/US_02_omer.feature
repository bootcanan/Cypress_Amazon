Feature: US_002 user able to login with valid credentials

 Scenario:TC_002_01 user able to login with valid credentials
        Given user is on 'https://www.amazon.co.uk/'
        When user clicks on signin button
        And user types valid email
        And user types valid password
        Then verify user successfully signin the amazon
        