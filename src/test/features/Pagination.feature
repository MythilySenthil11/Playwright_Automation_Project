@Mythily_pagination
Feature: Mythily_08/07/2026_Pagination_Tests

    Background:
        Given the user is on the login page
        When the user enters valid credentials
        And the user clicks on the login button
        And User clicks on the Course Structure

    Scenario: Verify user can navigate to the next page
        When User clicks the Next page button
        Then User should be navigated to the next page

    Scenario: Verify user can navigate to the previous page
        When User clicks the Next page button
        And User clicks the Previous page button
        Then User should be navigated to the previous page

    Scenario: Verify user can navigate to a specific page
        When User clicks the page number from pagination data
        Then User should be navigated to the selected page