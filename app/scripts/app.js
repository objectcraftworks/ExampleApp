'use strict';

angular.module('exampleAppApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
.controller('UserController', function($scope,$route,$routeParams, $location){
   

})

  .config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
    $routeProvider
 	.when('/api/locators/by/id',{
             templateUrl: '/views/api/by/id.html',
	})
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

$locationProvider.html5Mode(true);

  }]);
