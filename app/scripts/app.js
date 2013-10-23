define([
  'angular'
], function(angular) {
  return angular.module('todaApp', [])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .otherwise({
          redirectTo: '/'
        })
    })
})
