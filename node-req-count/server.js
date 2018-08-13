var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  // ### Example
  // * A **POST** to `/dogs` should set `globalCounter.dogs = 1`.
  // * A subsequent **GET** to `/dogs` should return `1`.
  // * A subsequent **POST** to `/dogs` should set `globalCounter.dogs = 2`.
  // * A subsequent **GET** to `/dogs` should return `2`.
  // * A subsequent **GET** to `/cats` should return an empty response, as it has not yet been set.
  // * A subsequent **POST** to `/cats` should set `globalCounter.cats = 1`.
  // * A subsequent **GET** to `/cats` should return `1`.

  if (request.method === 'POST') {
    // YOUR CODE HERE
    if (!property) {
      var property;
      property.globalCounter = 1;
      return 201;
    }
     if (property) {
      property.globalCounter++;
      return 202;
    }
  } else if (request.method === 'GET') {
    // YOUR CODE HERE
     if (property) {
    return property.globalCounter;
    }
  } else {
    response.statusCode = 404;
    return;
    response.end();
  }
});

// Do not edit this line
module.exports = server;
