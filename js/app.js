'use strict';

/* App Module */

var eventcatApp = angular.module('eventcatApp', [
  'ngRoute',
  'eventcatControllers',
  'eventcatFactories'
  // 'ngFx',
  // 'ngAnimate'
]);

eventcatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/cities', {
        templateUrl: 'partials/event-list.html',
        controller: 'EventListCtrl'
      }).
      when('/cities/:name', {
        templateUrl: 'partials/event-detail.html',
        controller: 'EventDetailCtrl'
      }).
      otherwise({
        redirectTo: '/cities'
      });
  }]);

eventcatApp.filter('num', function() {
    return function(input) {
      return parseInt(input, 10);
    };
});