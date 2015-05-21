'use strict';

/**
 * @ngdoc function
 * @name clickbaitApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the clickbaitApp
 */
angular.module('clickbaitApp')
  .controller('HomeCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.titles = [];
    $scope.poolDisplay = false;

    $scope.buttonDisplay = false;

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
                    'Here\'s why.',
                    'My God, you HAVE to see this.',
                    'It just blows my mind.',
                    'You will never think the same way again.',
                    'I dare you to watch this.',
                    'I can\'t believe what I just read.',
                    'I can\'t believe what I just watched.',
                    'I can\'t believe what I just saw.',
                    'You\'ve been doing it wrong all this time.',
                    'You think you know it well. But you know nothing, Jon Snow!',
                    'You will never see it the same way again.',
                    'Forget what you know because you know nothing actually.',
                    'Belive it or not, it changed his life.',
                    'Belive it or not, it changed her life.',
                    'We can close the internet now.',
                    'So hilarious you will die.',
                    'What happens next is beyond this world.',
                    'What happens next is more than what you can imagine.',
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

    $scope.textToTweet = function() {
      return encodeURIComponent($scope.result()+' http://nicnocquee.com/Clickbait-Title-Generator');
    };

    $scope.textToTweetForTitle = function(title) {
      return encodeURIComponent(title+' http://nicnocquee.com/Clickbait-Title-Generator');
    };

    $scope.reloadPool = function () {
      var req = {
        method: 'GET',
        url: 'https://api.parse.com/1/classes/Pool?order=-createdAt&limit=100',
        headers: {
          'X-Parse-Application-Id': 'gi94Kt6C7BZvtWdu94TOwtwLEl9fT018dye2zJHj',
          'X-Parse-REST-API-Key': 'UgdcX3NKVt6r44Kakezy8kPNDPS6V4NAH8vL1n4q',
          'Content-Type': 'application/json'
        },
      };

      $http(req).success(function (data) {
        var results = data.results;
        $scope.titles = results;
        if ($scope.titles.length > 0) {
          $scope.poolDisplay = true;
        }
      }).error(function () {

      });
    };

    $scope.reloadPool();

    $scope.submitToPool = function () {
      $scope.submitDisabled = true;
      var title = $scope.result();

      var req = {
        method: 'POST',
        url: 'https://api.parse.com/1/classes/Pool',
        headers: {
          'X-Parse-Application-Id': 'gi94Kt6C7BZvtWdu94TOwtwLEl9fT018dye2zJHj',
          'X-Parse-REST-API-Key': 'UgdcX3NKVt6r44Kakezy8kPNDPS6V4NAH8vL1n4q',
          'Content-Type': 'application/json'
        },
        data: {
          'title': title
        }
      };

      $http(req).success(function () {
        $scope.submitDisabled = false;
        $scope.reloadPool();
      }).error(function () {
        $scope.submitDisabled = false;
      });
    };
  });
