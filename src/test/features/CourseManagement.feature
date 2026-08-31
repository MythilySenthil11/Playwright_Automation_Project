@Subathra @coursemanagement
Feature: Subathra_07-07-2026_Course_Management_Functionality

    Background:
        Given the user is on the login page
        When the user enters valid credentials
        And the user clicks on the login button
        And the user navigates to the Course Management page

    Scenario: Verify user can view course details
        When the user searches for a course name
        And the user clicks the Three dots button of a course
        And the user clicks the View Details option
        Then the user should see the course details page
    Scenario: Verify user can view course structure
        When the user searches for a course name
        And the user clicks the view details button of a course structure
        Then the user should see the course structure page
    Scenario: Verify user can view pedagogy details
        When the user searches for a course name
        And the user clicks the View pedagogy button of a course
        Then the user should see the pedagogy details page