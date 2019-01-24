$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("applicationCreation.feature");
formatter.feature({
  "line": 1,
  "name": "Creation of applications",
  "description": "",
  "id": "creation-of-applications",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "there is an Applications server",
  "keyword": "Given "
});
formatter.match({
  "location": "ApplicationCreationSteps.there_is_an_Applications_server()"
});
formatter.result({
  "duration": 940518074,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "create an application",
  "description": "",
  "id": "creation-of-applications;create-an-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I have an application payload",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I POST it to the /applications endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I receive a 201 status code and an application payload",
  "keyword": "Then "
});
formatter.match({
  "location": "ApplicationCreationSteps.i_have_an_application_payload()"
});
formatter.result({
  "duration": 2685469,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationCreationSteps.i_POST_it_to_the_applications_endpoint()"
});
formatter.result({
  "duration": 1400815000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 12
    }
  ],
  "location": "ApplicationCreationSteps.i_receive_a_status_code_and_an_application_payload(int)"
});
formatter.result({
  "duration": 8633454,
  "status": "passed"
});
formatter.uri("badgeCreation.feature");
formatter.feature({
  "line": 1,
  "name": "Creation of badges",
  "description": "",
  "id": "creation-of-badges",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "there is a Badges server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I have an application token",
  "keyword": "Given "
});
formatter.match({
  "location": "BadgeCreationSteps.there_is_a_Badges_server_and_a_token()"
});
formatter.result({
  "duration": 2556356,
  "status": "passed"
});
formatter.match({
  "location": "UserCreationSteps.i_have_an_application_token()"
});
formatter.result({
  "duration": 38785652,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "create a badge without token",
  "description": "",
  "id": "creation-of-badges;create-a-badge-without-token",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I have a badge payload",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I POST it to the /badges endpoint without token",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I receive a 403 status code",
  "keyword": "Then "
});
formatter.match({
  "location": "BadgeCreationSteps.i_have_a_badge_payload()"
});
formatter.result({
  "duration": 320283,
  "status": "passed"
});
formatter.match({
  "location": "BadgeCreationSteps.i_POST_it_to_the_badges_endpoint()"
});
formatter.result({
  "duration": 172644237,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "there is a Badges server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I have an application token",
  "keyword": "Given "
});
formatter.match({
  "location": "BadgeCreationSteps.there_is_a_Badges_server_and_a_token()"
});
formatter.result({
  "duration": 708407,
  "status": "passed"
});
formatter.match({
  "location": "UserCreationSteps.i_have_an_application_token()"
});
formatter.result({
  "duration": 35417205,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "create a badge with token",
  "description": "",
  "id": "creation-of-badges;create-a-badge-with-token",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I have a badge payload",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I POST it to the /badges endpoint with token",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I receive a 201 status code and a badge payload",
  "keyword": "Then "
});
formatter.match({
  "location": "BadgeCreationSteps.i_have_a_badge_payload()"
});
formatter.result({
  "duration": 62236,
  "status": "passed"
});
formatter.match({
  "location": "BadgeCreationSteps.i_POST_it_to_the_badges_endpoint_with_token()"
});
formatter.result({
  "duration": 44666659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 12
    }
  ],
  "location": "BadgeCreationSteps.i_receive_a_status_code_and_a_badge_payload(int)"
});
formatter.result({
  "duration": 1152935,
  "error_message": "java.lang.AssertionError: expected:\u003c201\u003e but was:\u003c400\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\n\tat org.junit.Assert.assertEquals(Assert.java:645)\n\tat org.junit.Assert.assertEquals(Assert.java:631)\n\tat io.wp2.gamification.api.spec.steps.BadgeCreationSteps.i_receive_a_status_code_and_a_badge_payload(BadgeCreationSteps.java:85)\n\tat ✽.Then I receive a 201 status code and a badge payload(badgeCreation.feature:15)\n",
  "status": "failed"
});
formatter.uri("userCreation.feature");
formatter.feature({
  "line": 1,
  "name": "Creation of users",
  "description": "",
  "id": "creation-of-users",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "there is a Users server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I have an application token",
  "keyword": "Given "
});
formatter.match({
  "location": "UserCreationSteps.there_is_an_Users_server()"
});
formatter.result({
  "duration": 1383840,
  "status": "passed"
});
formatter.match({
  "location": "UserCreationSteps.i_have_an_application_token()"
});
formatter.result({
  "duration": 38780930,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "create a user without token",
  "description": "",
  "id": "creation-of-users;create-a-user-without-token",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I have a user payload",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I POST it to the /users endpoint without token",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I receive a 403 status code",
  "keyword": "Then "
});
formatter.match({
  "location": "UserCreationSteps.i_have_a_user_payload()"
});
formatter.result({
  "duration": 241084,
  "status": "passed"
});
formatter.match({
  "location": "UserCreationSteps.i_POST_it_to_the_users_endpoint()"
});
formatter.result({
  "duration": 202799548,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "there is a Users server",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I have an application token",
  "keyword": "Given "
});
formatter.match({
  "location": "UserCreationSteps.there_is_an_Users_server()"
});
formatter.result({
  "duration": 651762,
  "status": "passed"
});
formatter.match({
  "location": "UserCreationSteps.i_have_an_application_token()"
});
formatter.result({
  "duration": 35316965,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "create a user with token",
  "description": "",
  "id": "creation-of-users;create-a-user-with-token",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I have a user payload",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I POST it to the /users endpoint with token",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I receive a 201 status code and a user payload",
  "keyword": "Then "
});
formatter.match({
  "location": "UserCreationSteps.i_have_a_user_payload()"
});
formatter.result({
  "duration": 60740,
  "status": "passed"
});
formatter.match({
  "location": "UserCreationSteps.i_POST_it_to_the_users_endpoint_with_token()"
});
formatter.result({
  "duration": 65703980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 12
    }
  ],
  "location": "UserCreationSteps.i_receive_a_status_code_and_a_user_payload(int)"
});
formatter.result({
  "duration": 157157,
  "status": "passed"
});
});