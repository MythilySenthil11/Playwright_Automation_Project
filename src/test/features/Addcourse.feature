@Mythily
Feature: Mythily_07/07/2026_Add_Course_Tests

    Background:
        Given User navigates to the application
        And User logs in with valid credentials
        And User clicks on the Course Structure
        And User clicks on the Add Course tab

    Scenario: Add a course with valid details
        When User enters the required details
            | client   | type                  | model | category              | name      |
            | PSG Tect | Business to Institute | HTD   | Software Development  | Frontend  |
        And User clicks on the Next button
            | level     |
            | Beginner  |
        And User verifies the course hierarchy
        And User selects the pedagogy
        And User enables the resource type
        And User verifies the skill selection
        And User clicks the Preview & Create button
        Then User verifies the course is added successfully