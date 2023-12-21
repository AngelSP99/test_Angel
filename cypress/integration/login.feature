Feature: Login Functionality

  Scenario: Successful Login
    Given I am on the login page
    When I enter valid credentials
    And click the login button
    Then I should be logged in successfully

  Scenario: Login with Incorrect Credentials
    Given I am on the login page
    When I enter incorrect credentials
    And click the login button
    Then I should see an error message

  Scenario: Login with Empty Credentials
    Given I am on the login page
    When I leave the credentials fields empty
    And click the login button
    Then I should see an error message