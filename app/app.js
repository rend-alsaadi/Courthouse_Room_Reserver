'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', ['ngRoute']).
config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/logInView',
            {
                templateUrl:'components/LogIn/logInView.html',
                controller: 'logInViewController'
            });
        $routeProvider.otherwise({redirectTo: '/logInView'});
}]);
