'use strict';

/**
 * @ngdoc function
 * @name clickbaitApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the clickbaitApp
 */
angular.module('clickbaitApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.result = function() {
      return $scope.who+' '+$scope.doing+'. You wont believe what happens next.';
    }
  });
