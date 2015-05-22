'use strict';

/**
 * @ngdoc service
 * @name clickbaitApp.Title
 * @description
 * # Title
 * Factory in the clickbaitApp.
 */
angular.module('RestService', ['ngResource'])
  .factory('Title', ['$resource', function ($resource) {
    var clickbaitAppHeaders = {
      'X-Parse-Application-Id': 'gi94Kt6C7BZvtWdu94TOwtwLEl9fT018dye2zJHj',
      'X-Parse-REST-API-Key': 'UgdcX3NKVt6r44Kakezy8kPNDPS6V4NAH8vL1n4q',
      'Content-Type': 'application/json'
    };

    return $resource('https://api.parse.com/1/classes/Pool', {}, {
      get: {
        method: 'GET',
        params: {
          'order': '-createdAt',
          'limit': 100
        },
        headers: clickbaitAppHeaders
      },
      post: {
        method: 'POST',
        params: {
          title: ''
        },
        headers: clickbaitAppHeaders
      }
    });
  }]);
