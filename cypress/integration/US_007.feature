Feature:user adds items to his basket he should see the total price of the items on the basket

Scenario:
Given user is on his account
And user types nutella on the search input
And user adds nutella to his basket
And user search for bread and adds to his basket
And user goes to the basket
Then verify user should be ble too see total price of these two items on the basket