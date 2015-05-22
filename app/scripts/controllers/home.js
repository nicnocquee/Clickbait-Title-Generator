'use strict';

/**
 * @ngdoc function
 * @name clickbaitApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the clickbaitApp
 */
angular.module('clickbaitApp')
  .controller('HomeCtrl', ['$scope', '$http', 'Title', function ($scope, $http, Title) {
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
                    'I just literally laughed my ass off!',
                    'Literally the cutest thing EVER.',
                    'It\'s so LEGEN ... wait for it ... DARY!',
                    'Why didn\'t I know about this?',
                    'I can\'t take my eyes off of this!',
                    'My God, what did I just read.',
                    'My God, what did I just see.',
                    'My God, what did I just watch.',
                    'Is this real life?',
                    'I bet you\'ve never seen anything like this.',
                    'This guy just won the internet. Nuff said.',
                    'This woman just won the internet. Nuff said.',
                    'You should do it too.',
                    'Why are we all not doing this too?',
                    'Why are we not funding this?',
                    'You have no idea of what just happened.',
                    'You have missed the best thing that could ever happen in your life.',
                    'Stop whatever you\'re doing and read this.',
                    'I literally shit my pants.',
                    'Some people just want to see the world burn.',
                    'This has to be illegal, right??',
                    'I\'m questioning my life right now. And you should too.',
                    'There. I said it.',
                    'You can live forever but you will only be able to see this once.'
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
      Title.get({}, function (res) {
        $scope.titles = res.results;
        if ($scope.titles.length > 0) {
          $scope.poolDisplay = true;
        }
      });
    };

    $scope.reloadPool();

    $scope.submitToPool = function () {
      $scope.submitDisabled = true;
      var title = $scope.result();

      Title.post({'title': title}, function () {
        $scope.submitDisabled = false;
        $scope.reloadPool();
      });
    };
  }]);
