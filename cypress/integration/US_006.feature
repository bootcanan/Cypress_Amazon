Feature:US_06C filter functonality

Scenario:TC_001_C filter functionality works as expected
 Given user is on his account
 And user types nutella on the search input
 And user clicks delivery date by tommorow
 Then verify user sees only free delivery nutella products on the listed items

 Scenario:TC_002_C sort functionality works as expected
 Given user is on his account
 And user types nutella on the search input
 And user sorts Price: High to Low
Then verify user sees price of products High to Low