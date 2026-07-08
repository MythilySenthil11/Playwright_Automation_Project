@Subathra
Feature: Subathra_07-07-2026_Course_Category_Functionality

Background: 
        Given the user launches the application
        When the user enters valid credentials
        And the user clicks on the login button
        And the user is on Dynamic Field Management page
        And the user clicks on the Course category button

Scenario: Add category by entering all the fields
        When the user clicks the Add Category button 
        And the user enters the category details
        |Category name|Course names|Category description|
        |Devops       |Frontend    |Html,CSS            |
        And the user clicks Create category button
        Then the user should see a successful creation message