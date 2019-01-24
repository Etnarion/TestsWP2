Feature: Creation of applications

  Background:
    Given there is an Applications server

  Scenario: create an application
    Given I have an application payload
    When I POST it to the /applications endpoint
    Then I receive a 201 status code and an application payload