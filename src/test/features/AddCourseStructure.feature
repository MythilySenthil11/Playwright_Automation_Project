@Tamil
Feature: TamilKumar 08-07-2026 Add course structure
    Background:
        Given the user is on the login page
        When the user enters valid credentials
        And the user clicks on the login button
        When I navigate to the Course Management page
        And search the course name

    @Tamil
    Scenario: Create a course structure with valid data
        When the user clicks the Add Course Structure button on the Course Management page
        And the user clicks the Module button on the Course Structure page
        And the user fills all the basic information
        And the user clicks the Create & Save button
        Then the user should see the message Operation completed successfully

    Scenario: Create a course structure with invalid data
        When the user clicks the Add Course Structure button on the Course Management page
        And the user clicks the Module button on the Course Structure page
        And the user fills all the invalid basic information
        And the user clicks the Create & Save button
        Then the user should see the validation message Title is required for module
    Scenario: Add a similar course structure with valid inputs
        When the user clicks the Add Course Structure button on the Course Management page
        And the user clicks the Similar Course button
        And the user selects the course category and the user searches for the course to duplicate
            | category       | Software Development |
            | search_keyword | defect_avengers      |
        And the user selects all modules and clicks the Duplicate Structure button
        And the user accepts the duplicate confirmation alert
        Then the user should see the message Operation completed successfully


