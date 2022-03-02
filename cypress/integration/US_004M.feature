Feature: US_004 User should be able list all the list items under All tag

    Scenario: TC_001 User should be able list all the list items under All tag

        Given user is on his account
        And user clicks on All tag
        And user should be able see all departments
        Then verify user will see all the items when click any link under All tag



