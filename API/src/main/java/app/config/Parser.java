package app.config;

import java.net.URI;
import java.net.URISyntaxException;

public class Parser {

    private URI uri;

    public Parser(String uri) throws URISyntaxException {
        this.uri = new URI(uri);
    }

    public String getJdbcUrl() {
        return uri.toString()
                .replace(uri.getUserInfo() + "@", "");
    }

    public String getUser() {
        return uri.getUserInfo().split(":")[0];
    }

    public String getPassword() {
        return uri.getUserInfo().split(":")[1];
    }

}