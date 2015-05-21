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

    $scope.buttonDisplay = false;
    //$scope.bait = 'You wont believe what happens next.';
    $scope.baits = ['At first you\'ll be intrigued. Then you\'ll be blown away.',
                    'I\'m still trying to pick my jaw up off the floor.',
                    'If You Can Watch This And Not Feel Disgusted, Then You Have No Emotions.',
                    'Try Not To Groan When You See It.',
                    'You won\'t believe what happens next.',
                    'First you\'ll be shocked then you\'ll be inspired.',
                    'You won\'t believe it actually happened.',
                    'Just try not to stare at it.',
                    'There is no God.',
                    'You\'re gonna weep for the future.',
                    'Here\'s why.'
    ];

    $scope.result = function() {
      if (!$scope.who || !$scope.doing) {
        $scope.buttonDisplay = false;
        return '';
      }
      $scope.buttonDisplay = true;
      return $scope.who+' '+$scope.doing+'. '+$scope.bait;
    };

    $scope.generate = function () {
      $scope.bait = $scope.baits[Math.floor(Math.random()*$scope.baits.length)];
    };

    $scope.generate();
  });
