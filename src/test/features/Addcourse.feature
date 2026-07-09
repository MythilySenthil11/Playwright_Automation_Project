@Mythily_UnderDevelopment
Feature: Mythily_07/07/2026_Add_Course_Tests

    Background:
        Given the user is on the login page
        When the user enters valid credentials
        And the user clicks on the login button
        When User clicks on the Course Structure
        And User clicks on the Add Course tab

    Scenario: Add a course with valid details
        When User enters the required details
            | client   | type                    | model | category             | name     |
            | PSG Tech | Business to institution | HTD   | Software Development | Frontend |
        And User clicks on the Next button
            | level    |
            | Beginner |
        And User verifies the course hierarchy
        And User selects the pedagogy
        And User enables the resource type
        And User verifies the skill selection
        And User clicks the Preview & Create button
        Then User verifies the course is added successfully
