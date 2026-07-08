
@krishna @pedagogy
Feature: Krishnaprasath_07/07/2026_Pedagoy_Dynamic Field Management

Description: This feature file is used to verify the Pedagogy Dynamic Field Management functionality in the SmartCliff application.

  Background:
    Given the user is on the login page
    When the user enters valid credentials
    And the user clicks on the login button
    And the user is on Dynamic Field Management page
    And the user clicks on the Pedagogy button

  Scenario: Verify the User can Add a New Element in Existing Pedagogy Activities
    And the user clicks on the Pedagogy view elements button 
    And the user clicks on the Add Element button
    And the user enters the element details
    And the user clicks on the Create Element button
    Then the user should be able to see the created element in the list of pedagogy elements


    