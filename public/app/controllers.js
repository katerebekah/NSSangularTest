var controllers = angular.module('myApp.controllers', []);

controllers.controller('indexController', ['$scope', function($scope){
	$scope.message = "Index Controller Checking In";
}])