'use strict';

/**
 * @ngdoc function
 * @name ngappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngappApp
 */
angular.module('ngappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
