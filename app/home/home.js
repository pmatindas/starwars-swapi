(function(){
	'use strict';

	angular.module('starwarsApp')
	.controller('HomeController',['$scope',HomeController]);

	function HomeController($scope){
		console.log("Home controller change");
	}
})();