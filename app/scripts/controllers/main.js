'use strict';

/**
 * @ngdoc function
 * @name clickbaitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clickbaitApp
 */
angular.module('clickbaitApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
