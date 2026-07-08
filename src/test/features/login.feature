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
 
@invalidlogin
Scenario Outline: Verify that the user is not able to login with invalid credentials
  When the user enters "<username>" and "<password>"
  And the user clicks on the login button
  Then an "<error message>" should be displayed

Examples:
  | username           | password     | error message         |
  | testing@gmail.com  | invalidpass1 | Password is incorrect |
  | invalid2@gmail.com | invalidpass2 | Email is invalid      |