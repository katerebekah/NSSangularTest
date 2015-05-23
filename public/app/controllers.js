var controllers = angular.module('myApp.controllers', []);

controllers.controller('indexController', ['$scope', function($scope){
	$scope.message = "Index Controller Checking In";
}]);

controllers.controller('aboutController', ['$scope', function($scope){
	$scope.message = "About Controller Checking In";
}]);

controllers.controller('needsController', ['$scope', function($scope){
	$scope.message = "Needs Controller Checking In";
	$scope.needs = [];
	$scope.addNeeds= function(need){
		$scope.needs.push(need);
		$scope.newNeed = '';}
}]);