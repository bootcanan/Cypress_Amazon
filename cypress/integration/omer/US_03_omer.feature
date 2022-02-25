Feature: US_003 user able to select category from All menu and verify sub kategories

 Scenario:TC_008_01 user able to create shopping list
        Given user is on 'https://www.amazon.co.uk/'
        When user clicks on signin button
        And user types valid email
        And user types valid password
        Then verify user successfully signin the amazon
        Then click on All to reach sub categories
        And verify subcategories
        
