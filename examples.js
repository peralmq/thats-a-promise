'use strict';

var FIRST_URI = 'http://rate-exchange.appspot.com/currency?from=USD&to=EUR'
  , BAD_URI = 'http:/rate-exchange.appspot.com/currency?from=EUR&to=USD'
  , SECOND_URI = 'http://rate-exchange.appspot.com/currency?from=EUR&to=USD'
  ;

function callbacks() {
  var request = require('request');
  request(FIRST_URI, function(error, response, body) {
    // if (error) {
    //   throw error;
    // }

    console.log(body);
    request(BAD_URI, function(error, response, body) {
      // if (error) {
      //   throw error;
      // }

      console.log(body);
    });
  });
}
callbacks();

// function promises() {
//   var Promise = require('bluebird')
//     , request = Promise.promisify(require('request'))
//   ;
//   request(FIRST_URI)
//   .spread(function(response, body) {
//     console.log(body);
//   })
//   .then(function() {
//     return request(BAD_URI)
//     .spread(function(response, body) {
//       console.log(body);
//     });
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
// }

// promises();

// function namedPromises() {
//   var Promise = require('bluebird')
//     , request = Promise.promisify(require('request'))
//     , responseHandler = function(response, body) { console.log(body); }

//     , promise1 = request(FIRST_URI).spread(responseHandler)
//     , promise2 = request(SECOND_URI).spread(responseHandler)
//     ;

//   promise1.then(promise2);
// }
// namedPromises();

// function parallelPromises() {
//   var Promise = require('bluebird')
//     , request = Promise.promisify(require('request'))
//     , responseHandler = function(response, body) { console.log(body); }

//     , promise1 = request(FIRST_URI).spread(responseHandler)
//     , promise2 = request(SECOND_URI).spread(responseHandler)
//     , promise3 = request(BAD_URI).spread(responseHandler)
//     ;

//   Promise.all([promise1, promise2, promise3]);
// }

// parallelPromises();
