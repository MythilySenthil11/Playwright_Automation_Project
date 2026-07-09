@Mythily
Feature: Mythily_08/07/2026_Recent_Activities

  Background:
    Given the user is on the login page
    When the user enters valid credentials
    And the user clicks on the login button
    Then the user should be redirected to the Admin Dashboard page

  @RecentActivities
  Scenario: Verify the recent activities list
    When the user opens the Dynamic Field Settings page
    And the user clicks the left arrow button
    Then the Recent Activities section should be displayed
    And the previously visited pages should be listed