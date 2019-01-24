package io.wp2.gamification.api.spec.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.swagger.client.ApiException;
import io.swagger.client.ApiResponse;
import io.swagger.client.api.DefaultApi;
import io.swagger.client.model.Application;
import io.wp2.gamification.api.spec.helpers.Environment;
import sun.security.timestamp.TimestampToken;
import sun.security.timestamp.Timestamper;

import java.sql.Time;
import java.sql.Timestamp;
import java.util.UUID;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertEquals;

/**
 * Authors: Samuel Mayor, Alexandra Korukova, Arnold Von Bauer Gauss, Pierre-Samuel Rochat
 */
public class ApplicationCreationSteps {

    private Environment environment;
    private DefaultApi api;

    private Application application;

    private ApiResponse lastApiResponse;
    private ApiException lastApiException;
    private boolean lastApiCallThrewException;
    private int lastStatusCode;

    public ApplicationCreationSteps(Environment environment) {
        this.environment = environment;
        this.api = environment.getApi();
    }

    @Given("^there is an Applications server$")
    public void there_is_an_Applications_server() throws Throwable {
        assertNotNull(api);
    }

    @Given("^I have an application payload$")
    public void i_have_an_application_payload() throws Throwable {
        application = new Application();
        application.setName("app" + UUID.randomUUID().toString());
    }

    @When("^I POST it to the /applications endpoint$")
    public void i_POST_it_to_the_applications_endpoint() throws Throwable {
        try {
            lastApiResponse = api.addApplicationWithHttpInfo(application);
            lastApiCallThrewException = false;
            lastApiException = null;
            lastStatusCode = lastApiResponse.getStatusCode();
        } catch (ApiException e) {
            lastApiCallThrewException = true;
            lastApiResponse = null;
            lastApiException = e;
            lastStatusCode = lastApiException.getCode();
        }

    }

    @Then("^I receive a (\\d+) status code and an application payload$")
    public void i_receive_a_status_code_and_an_application_payload(int arg1) throws Throwable {
        assertEquals(201, lastStatusCode);
        assertNotNull(lastApiResponse.getData());
    }
}
