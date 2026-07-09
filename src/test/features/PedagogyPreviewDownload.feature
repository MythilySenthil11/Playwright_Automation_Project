@Subathra 
Feature: Subathra_09-07-2026_Pedagogy_Preview_ExcelDownload_Functionality

Background: 
        Given the user is on the login page
        When the user enters valid credentials
        And the user clicks on the login button
        When the user navigate to the Course Management page

Scenario: verify the Excel download functionality of Pedagogy in course structure
        When the user enter course name on the search tab 
        And the user clicks the Add Course Structure button on the Course Management page
        And the user clicks the print button
        And the user chooses the excel in export options
        Then the user able to see the downloaded excel file

