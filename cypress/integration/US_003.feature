Feature: US_002 Sign in functionality

Scenario:TC_001  User should not be able to sign in with invalid credentials
 Given user is on 'https://www.amazon.co.uk/'
 When user clicks on signin button
And user types invalid email
Then verify user can not signIn

Scenario:TC_002  User should not be able to sign in with invalid credentials
 Given user is on 'https://www.amazon.co.uk/'
 When user clicks on signin button
And user types valid email
And user types invalid password
 Then verify user can not login
