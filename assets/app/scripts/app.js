'use strict';

var grassroot = angular.module('grassroot', ['ngCookies','ngResource','ngSanitize','ngRoute', 'ngTouch'])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/cards', {
        templateUrl: 'views/cards.html',
        controller: 'CardsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

