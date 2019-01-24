package io.wp2.gamification.api.spec.helpers;

import io.swagger.client.ApiException;
import io.swagger.client.api.DefaultApi;
import io.swagger.client.model.Application;

import java.io.IOException;
import java.util.Properties;

public class Environment {

    private DefaultApi api = new DefaultApi();

    private String token;

    public Environment() throws IOException {
        Properties properties = new Properties();
        properties.load(this.getClass().getClassLoader().getResourceAsStream("environment.properties"));
        String url = properties.getProperty("io.wp2.gamification.server.url");
        api.getApiClient().setBasePath(url);

    }

    public DefaultApi getApi() {
        return api;
    }

    public String getApplicationToken() throws ApiException {
        return token;
    }

    public void setApplicationToken(String token) {
        this.token = token;
    }

}
