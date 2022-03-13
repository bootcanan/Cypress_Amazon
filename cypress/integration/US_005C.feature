Feature: US_05C Item search functionality

  Feature Description
  Scenario: TC_001_C When user is searching for an item , all the listed item should include the text of the item


    Given user is on his account
    And user types nutella on the search input
    Then verify all the listed items include nutella