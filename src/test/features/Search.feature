@Mythily
Feature: Mythily_08/07/2026_Search_Course_Tests

    Background:
        Given the user is on the login page
        When the user enters valid credentials
        And the user clicks on the login button
        When User clicks on the Course Structure

    Scenario Outline: Search course using the search box
        When User enters "<SearchText>" in the search box
        Then User should see "<ExpectedResult>"

        Examples:
            |   SearchText    | ExpectedResult |
            | defect_avengers | defect_avengers|
            |     ABC123      | No users found |