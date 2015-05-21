'use strict';

/**
 * @ngdoc overview
 * @name clickbaitApp
 * @description
 * # clickbaitApp
 *
 * Main module of the application.
 */
angular
  .module('clickbaitApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name clickbaitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clickbaitApp
 */
angular.module('clickbaitApp')
  .controller('MainCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

'use strict';

/**
 * @ngdoc function
 * @name clickbaitApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clickbaitApp
 */
angular.module('clickbaitApp')
  .controller('AboutCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

'use strict';

/**
 * @ngdoc function
 * @name clickbaitApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the clickbaitApp
 */
angular.module('clickbaitApp')
  .controller('HomeCtrl', ["$scope", function ($scope) {
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

    $scope.textToTweet = function() {
      return encodeURIComponent($scope.result()+' http://nicnocquee.com/Clickbait-Title-Generator');
    };
  }]);
