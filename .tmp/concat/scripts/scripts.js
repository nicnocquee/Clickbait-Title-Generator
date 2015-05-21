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

    $scope.result = function() {
      return $scope.who+' '+$scope.doing+'. You wont believe what happens next.';
    }
  }]);
