var app = angular.module('myApp', ['ngRoute', 'myApp.controllers']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {templateUrl: 'partials/index', controller: 'indexController'})
    .otherwise({redirectTo:'/'})
    .when('/about', {templateUrl: 'partials/about', controller: 'aboutController'})
    .when('/needs', {templateUrl: 'partials/needs', controller: 'needsController'})
}])

.config(['$locationProvider', function($locationProvider){
    $locationProvider.html5Mode(true);
}]);