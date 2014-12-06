'use strict';

/**
 * @ngdoc overview
 * @name ngappApp
 * @description
 * # ngappApp
 *
 * Main module of the application.
 */
angular
  //.module('ngappApp', [
  //  'ngAnimate',
  //  'ngCookies',
  //  'ngResource',
  //  'ngRoute',
  //  'ngSanitize',
  //  'ngTouch'
  //])
    .module('Nihachilab', [
        'Nihachilab.Directives',
        'Nihachilab.Services',
        'Nihachilab.Controllers'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    });

angular.module('Nihachilab.Directives', []);
angular.module('Nihachilab.Services', []);
angular.module('Nihachilab.Controllers', ['Nihachilab.Services', 'Nihachilab.Directives']);
