@Subathra
Feature: Subathra_07-07-2026_Add_submodule_in_course_structure

  Background:
    Given the user is on the login page
    When the user enters valid credentials
    And the user clicks on the login button
    When I navigate to the Course Management page
    And search the course name

  Scenario: Add a valid submodule from hierarchy actions
    When the user clicks the Add Course Structure button on the Course Management page
    And the user clicks the More button on the Course Structure page
    And the user enables the Hierarchy Actions option
    And the user clicks the Add Sub Module button
    And the user fills the submodule details with title "Sub Module Valid" and description "Automation created valid submodule"
    And the user clicks the Create & Save button
    Then the user should see the message Operation completed successfully

 
  Scenario: Add an invalid submodule without title
    When the user clicks the Add Course Structure button on the Course Management page
    And the user clicks the More button on the Course Structure page
    And the user enables the Hierarchy Actions option
    And the user clicks the Add Sub Module button
    And the user fills the submodule details with title "" and description "Submodule without title"
    And the user clicks the Create & Save button
    Then the user should see the validation message "Title is required for submodule" for submodule

  Scenario: Add a second submodule under the same module
    When the user clicks the Add Course Structure button on the Course Management page
    And the user clicks the More button on the Course Structure page
    And the user enables the Hierarchy Actions option
    And the user clicks the Add Sub Module button
    And the user fills the submodule details with title "Second Sub Module" and description "Second automated submodule"
    And the user clicks the Create & Save button
    Then the user should see the message Operation completed successfully

  
  Scenario: Edit an existing submodule from hierarchy actions
    When the user clicks the Add Course Structure button on the Course Management page
    And the user clicks the More button on the Course Structure page
    And the user enables the Hierarchy Actions option
    And the user clicks the three dots on the first submodule and selects the edit option
    And the user updates the submodule title to "Updated Sub Module" and description to "Updated automation submodule"
    And the user clicks the Create & Save button
    Then the user should see the message Operation completed successfully


  Scenario: Verify the newly created submodule is displayed in the structure
    When the user clicks the Add Course Structure button on the Course Management page
    And the user clicks the More button on the Course Structure page
    And the user enables the Hierarchy Actions option
    And the user clicks the Add Sub Module button
    And the user fills the submodule details with title "Visible Sub Module" and description "Visible in structure"
    And the user clicks the Create & Save button
    Then the user should see the created submodule "Visible Sub Module" in the course structure