Feature: Creation of badges

  Background:
    Given there is a Badges server
    Given I have an application token

  Scenario: create a badge without token
    Given I have a badge payload
    When I POST it to the /badges endpoint without token
    Then I receive a 403 status code

  Scenario: create a badge with token
    Given I have a badge payload
    When I POST it to the /badges endpoint with token
    Then I receive a 201 status code and a badge payload