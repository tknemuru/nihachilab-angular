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
    .module('Nihachilab', [
        'Nihachilab.Services',
        'Nihachilab.Filters',
        'Nihachilab.Directives',
        'Nihachilab.Controllers',
        'ui.bootstrap'
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

angular.module('Nihachilab.Services', []);
angular.module('Nihachilab.Filters', []);
angular.module('Nihachilab.Directives', ['Nihachilab.Services', 'ui.bootstrap']);
angular.module('Nihachilab.Controllers', ['Nihachilab.Services', 'Nihachilab.Filters', 'Nihachilab.Directives']);
