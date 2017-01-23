var request = require("request");

var tests = {};

tests.getAllUrls = function(callback) {
    request({
        method: "GET",
        uri: "http://linux0.local:3000/api/v1/urls/"
    }, function(error, response, body) {
        if(error || !body) {
            callback(true);
            return;
        }

        var parsedBody = body;

        if(parsedBody.error) {
            callback(true);
            return;
        }

        callback();
    });
};

tests.makeShortUrl = function(callback) {
    request({
        method: "POST",
        uri: "http://linux0.local:3000/api/v1/urls/",
        json: {
            url: "https://google.com/"
        }
    }, function(error, response, body) {
        if(error || !body) {
            callback(null, true);
            return;
        }

        var parsedBody = body;

        if(parsedBody.error) {
            callback(null, true);
            return;
        }

        callback(parsedBody.id, false);
    });
};

tests.modifyShortUrl = function(id, callback) {
    request({
        method: "POST",
        uri: "http://linux0.local:3000/api/v1/urls/" + id + "/",
        json: {
            url: "http://example.org/"
        }
    }, function(error, response, body) {
        if(error || !body) {
            callback(true);
            return;
        }

        var parsedBody = body;

        if(parsedBody.error) {
            callback(true);
            return;
        }

        callback(false);
    });
};

tests.deleteShortUrl = function(id, callback) {
    request({
        method: "DELETE",
        uri: "http://linux0.local:3000/api/v1/urls/" + id + "/"
    }, function(error, response, body) {
        if(error || !body) {
            callback(true);
            return;
        }

        var parsedBody = body;

        if(parsedBody.error) {
            callback(true);
            return;
        }

        callback(false);
    });
};

tests.getOneShortUrl = function(id, callback) {
    request({
        method: "GET",
        uri: "http://linux0.local:3000/api/v1/urls/" + id + "/"
    }, function(error, response, body) {
        if(error || !body) {
            callback(true);
            return;
        }

        var parsedBody = body;

        if(parsedBody.error) {
            callback(true);
            return;
        }

        callback(false);
    });
};

tests.givenRoute = function(route, callback) {
    request({
        method: "GET",
        uri: "http://linux0.local:3000" + route
    }, function(error, response, body) {
        if(error || !body) {
            callback(true);
            return;
        }

        var parsedBody = body;

        if(parsedBody.error) {
            callback(true);
            return;
        }

        callback(false);
    });
};

module.exports = tests;