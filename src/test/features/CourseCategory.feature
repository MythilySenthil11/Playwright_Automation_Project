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
        |Category_name|Course_names|Category_description|
        |Devops       |Frontend    |Html,CSS            |
        And the user clicks Create category button
        Then the user should see a successful creation message

Scenario: Edit category details with the help of search functionality
        When the user clicks the Add Category button 
        And the user enters the category details for edit from JSON file
        And the user clicks Create category button
        Then the user should see a successful creation message
        When the user enters the category name in the search tab 
        And the user clicks the dropdown button and clicks the edit option
        And the user updates the details of the category
        And the user clicks the update category button
        Then the user should see a successful updation message

Scenario: Delete the category with the help of search functionality
        When the user clicks the Add Category button 
        And the user enters the category details for delete from JSON file
        And the user clicks Create category button
        Then the user should see a successful creation message
        When the user enters the created category name in the search tab 
        And the user clicks the dropdown button
        And the user clicks the delete option
        And the user clicks the delete button in the confirmation pop up
        And the user searches the deleted category 
        Then the user should see a not found message