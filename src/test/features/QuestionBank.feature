Feature: Question Bank Management

    Background:
        Given the user is on the login page
        When the user enters valid credentials
        And the user clicks on the login button
        And the user clicks on the Question Bank option from the Admin Dashboard page

    @smoke @questionbank @Tamil
    Scenario: Create a new MCQ question successfully
        When the user clicks the Create Question Bank dropdown
        And the user selects the MCQ Question option
        And the user enters the category Data Structures and fill the question
        And the user enters Stack as Option one
        And the user enters Queue as Option two
        And the user clicks the Add Option button
        And the user enters Linked List as Option three
        And the user opens the Answer Key
        And the user selects the first answer option
        And the user clicks the Done button
        And the user clicks the Save Question button
        Then the question should be saved successfully

    @Tamil @questionbank
    Scenario: Verify user cannot save an MCQ question without entering the question
        When the user clicks the Create Question Bank dropdown
        And the user selects the MCQ Question option
        And the user enters the category Data Structures
        And the user enters Stack as Option one
        And the user enters Queue as Option two
        And the user clicks the Add Option button
        And the user enters Linked List as Option three
        And the user opens the Answer Key
        And the user selects the first answer option
        And the user clicks the Done button
        And the user clicks the Save Question button
        Then the question required validation message should be displayed