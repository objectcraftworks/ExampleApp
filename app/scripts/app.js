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
 	.when('/api/:dir1/:file',{
             templateUrl: function(routeParams){
return '/views/api/' + routeParams.dir1 + '/' + '/' + routeParams.file +'.html';},
	})
 	.when('/api/locators/by/:file',{
             templateUrl: function(routeParams){
return '/views/api/locators/' +  routeParams.file +'.html';},
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
