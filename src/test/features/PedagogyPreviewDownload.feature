@Subathra 
Feature: Subathra_09-07-2026_Pedagogy_Preview_ExcelDownload_Functionality

Background: 
        Given the user is on the login page
        When the user enters valid credentials
        And the user clicks on the login button
        And User clicks on the Course Structure

Scenario: verify the Excel download functionality of Pedagogy in course structure
        When the user enter course name on the search tab 
        And the user clicks the Add Course Structure button
        And the user clicks the print button
        Then the user able to see the downloaded excel file

