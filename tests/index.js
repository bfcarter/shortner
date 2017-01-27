const assert = require('assert');

const config = require('../config.js');
const apiTests = require('./api/shortUrls.js');

describe('api', function () {
  this.timeout(20000);

  describe('get all short urls', function () {
    it('should return list of short urls', function (done) {
      apiTests.getAllUrls(function (error) {
        done(error);
      });
    });
  });

  describe('make short url', function() {
    it('should make short url', function(done) {
      apiTests.makeShortUrl(function (id, error) {
        done(error || !id);
      });
    });
  });

  describe('modify short url', function () {
    it('should change destination url of short url', function(done) {
      apiTests.makeShortUrl(function (id, error) {
        if (error || !id) {
          done(error || !id);
          return;
        }

        apiTests.modifyShortUrl(id, function (error) {
          done(error);
        });
      });
    });
  });

  describe('delete a short url', function() {
    it('should delete a short url', function(done) {
      apiTests.makeShortUrl(function(id, error) {
        if (error || !id) {
          done(error || !id);
          return;
        }

        apiTests.deleteShortUrl(id, function (error) {
          done(error);
        });
      });
    });
  });

  describe('get a short url', function() {
    it('should retrieve one short url', function(done) {
      apiTests.makeShortUrl(function(id, error) {
        if (error || !id) {
          done(error || !id);
          return;
        }

        apiTests.getOneShortUrl(id, function (error) {
          done(error);
        });
      });
    });
  });

  if (config.testRoutes) {
    require('./testRoute.js')(config.testRoutes);
  }
});
