@course
Feature: TamilKumar 08-07-2026 Add course structure
    Background:
        Given the user is on the login page
        When the user enters valid credentials
        And the user clicks on the login button
        When the user navigate to the Course Management page

    @Tamil
    Scenario: Create a course structure with valid data
        When the user clicks the Add Course Structure button on the Course Management page
        And the user clicks the Module button on the Course Structure page
        And the user fills all the basic information
        And the user clicks the Create & Save button
        Then the user should see the message Operation completed successfully


