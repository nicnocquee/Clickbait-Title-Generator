'use strict';

/**
 * @ngdoc function
 * @name clickbaitApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clickbaitApp
 */
angular.module('clickbaitApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
