@krishna @login
Feature: Krishnaprasath_07/07/2026_login_functionality
 Description: This feature file is used to test the login functionality of the application.

  Background: 
      Given the user is on the login page

  @validlogin
  Scenario: Verify that the user is able to login with valid credentials
    When the user enters valid credentials
    And the user clicks on the login button
    Then the user should be redirected to the dashboard page
