@Jerishwin
Feature: Editing pre-existing  course

    Background: 
        Given the user is on the login page
        When the user enters valid credentials
        And the user clicks on the login button
        When I navigate to the Course Management page

    @Jerishwin
    Scenario: Editing a course
        And the user clicks the kebab button of a course
        And chooses the edit course option
        And the user fills the first page of edit course structure form and clicks next button
        And fills the second page of edit course structure form and clicks preview & update button
        And the user clicks the save course layout button in the course layout preview
        Then the course updated message should be visible