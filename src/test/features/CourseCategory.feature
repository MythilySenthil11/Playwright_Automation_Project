@Subathra
Feature: Subathra_07-07-2026_Course_Category_Functionality

Background: 
        Given the user launches the application
        And the user login to the application
        And the user is in Dynamic Field Management page

Scenario: Add category by entering all the fields
        When the user clicks the Add Category button 
        And the user enters the details on all the fields
        |Category name|Course names|Category description|
        |Devops       |Frontend    |Html,CSS            |
        And the user clicks Create category button
        Then the user should be able to see the successfully created message