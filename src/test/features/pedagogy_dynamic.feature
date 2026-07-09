
@krishna @pedagogy
Feature: Krishnaprasath_07/07/2026_Pedagoy_Dynamic Field Management

Description: This feature file is used to verify the Pedagogy Dynamic Field Management functionality in the SmartCliff application.

  Background:
    Given the user is on the login page
    When the user enters valid credentials
    And the user clicks on the login button
    And the user is on Dynamic Field Management page
    And the user clicks on the Pedagogy button
  @pedagogy1
  Scenario: Verify the User can Add a New Element in Existing Pedagogy Activities
    And the user clicks on the Pedagogy view elements button 
    And the user clicks on the Add Element button
    And the user enters the element details
    And the user clicks on the Create Element button
    Then the user should be able to see the created element in the list of pedagogy elements

  @pedagogy2
 Scenario: verify the User can edit element in Existing Pedagogy activites
       And the user clicks on the Pedagogy view elements button
       And the user Clicks on the edit button
       And the user edits the content of element name
       And the user clicks on the Update Element button
       And the user should be able to see the updated element 

   @pedagogy3
  Scenario: verify the User can delete element in Existing Pedagogy activites
       And the user clicks on the Pedagogy view elements button
       And the user Clicks on the delete button
       And the user clicks on the delete confirmation button
       Then the user should be able to see the deleted element is not present in the list of pedagogy elements   
  @searchpeda
  Scenario Outline: verify the User can Search The Pedagogy Activities   
       And the user enters the "<data type>" in pedagogy activities search bar
       Then the user should be able to see the corresponding activity

    Examples:
            |data type|
            |I DO     |
            |We DO    |
            |You DO   |
