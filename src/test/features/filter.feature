@Tamil
Feature: TamilKumar 07-07-2026 Course Filter Functionality
    Background:
        Given the user is on the login page
        When the user enters valid credentials
        And the user clicks on the login button
        When I navigate to the Course Management page
        And I click the Filter button
    @Tamil
    Scenario: Verify filtering courses by category
        When I select Automation Project from the Category dropdown
        Then only courses belonging to the selected category should be displayed
 
    Scenario Outline: Verify filtering courses by level
        When I select "<Level>" from the level dropdown
        Then only "<Level>" courses should be displayed

        Examples:
            | Level        |
            | Beginner     |
            | Intermediate |
            | Expert       |
