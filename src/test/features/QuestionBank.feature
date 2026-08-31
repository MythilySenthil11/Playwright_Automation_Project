Feature: TamilKumar12-07-2026 Question Bank Management updated 20=07=2026

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
    @Tamil @questionbank
    Scenario: Verify user can create a Programming question
        When the user clicks the Create Question Bank dropdown
        And the user selects the Programming Question option
        And the user enters the program title
        And the user enters the question description
        And the user enters the test case and expected outcome
        And the user clicks the Save Question Button
        Then the question should be created successfully
    @Tamil @SearchQuestion @questionbank
    Scenario Outline: Verify user can search a question by question title
        When the user enters the "<question title>" in the search bar
        Then the question should be displayed in the search results "<question title>"
        Examples:
            | question title    |
            | Java              |
            | Debounce Function |

    @Tamil @SearchQuestion @questionbank

    Scenario Outline: Verify user cannot find a question with an invalid question title
        When the user enters the "<question title>" in the search bar
        Then the question should not be displayed in the search results

        Examples:
            | question title       |
            | Invalid Question 123 |
            | XYZ12345             |
          


    @Tamil
    Scenario Outline: Verify user can edit a question
        When the user enters the "<question title>" in the search bar
        And the user clicks the edit button
        And the user updates the "<updated title>"
        And the user clicks the Update Question button
        Then the question should be updated successfully
        Examples:
            | question title | updated title |
            | Java           | Python        |
            | Python         | Java          |

    @Tamil @questionbank

    Scenario Outline: Verify user can filter questions by status
        When the user clicks the question status filter
        And the user selects "<Status>" status
        Then the user should see only "<Status>" questions and the question count should be "<Total>"

        Examples:
            | Status   | Total |
            | Active   | 207   |
            | Inactive | 4     |

    @Tamil @questionbank

    Scenario Outline: Verify user can filter questions by type
        When the user clicks the question type filter
        And the user selects "<Type>" type
        Then the user should see only type questions and the question count should be "<Total>"

        Examples:
            | Type        | Total |
            | MCQ         | 100   |
            | Programming | 111   |