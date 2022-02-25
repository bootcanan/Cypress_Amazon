Feature: US_002 Sign in functionality

Scenario:TC_001  User should be able to sign in with valid credentials
 Given user is on 'https://www.amazon.co.uk/'
And user login with valid data
 Then verify user successfully signin the amazon
