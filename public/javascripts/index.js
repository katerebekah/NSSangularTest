(function() {
  'use strict';
  angular.module('hallo', []).controller('mainController', ['$scope', function($scope){
  		$scope.name = 'Kate';
  		$scope.instructors = [
  			{name: 'Steve', allergies: 'sunshine'},
  			{name: 'Zoe', allergies: 'students'},
  			{name: 'Joe', allergies: "everything"}
  			];

 		}]);


})();
