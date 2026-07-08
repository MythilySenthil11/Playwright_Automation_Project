@Jerishwin
Feature: Sorting Courses

    Background: 
        Given the user is on the login page
        When the user enters valid credentials
        And the user clicks on the login button
        And I navigate to the Course Management page 

    @Jerishwin
    Scenario Outline: Sorting
        And the user clicks the "<Name>" tab in the table
        Then the table Should be sorted according to "<Name>"

        Examples: 
            |Name       |
            |Date       |
            |Client     |
            |Course Name|


