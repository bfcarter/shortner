const assert = require('assert');

const apiTests = require('./api/shortUrls.js');

module.exports = function (routes) {
  routes.map(function (route) {
    describe("Dynamic route test for: " + route, function () {
      it("Should not return error", function (done) {
        apiTests.givenRoute(route, function (error) {
          done(error);
        });
      });
    });
  });
};
