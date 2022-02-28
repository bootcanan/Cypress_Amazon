Feature: US_010 User should be able to add new items to his basket

    Scenario: TC_001 User should be able to add new items to his basket

        When User is on his account
        And User search for nutella
        And User adds nutella spoon to the basket
        And User search for ball
        And User adds ball to the basket
        And User goes to the basket
        And User should be able to see nutella spoon and ball on his basket