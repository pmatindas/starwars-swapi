(function(){
	'use strict';

	angular.module('starwarsApp',[
		'ngRoute'
	])
	.directive('onScroll', function(){
		var directive = {
			restrict:'AE',
			scope: {		
			    onScroll: '&',		
				inProgress: '='
			},
			link: function(scope, elm, attr) {
			        var raw = elm[0];

			        var funCheckBounds = function(evt) {            
			            var rectObject = raw.getBoundingClientRect();
			            var inProgress = false;

			            if ((rectObject.bottom <= window.innerHeight+30) && scope.inProgress == false) {                
			                scope.$apply(function() {

			                	scope.onScroll();
			                });			              
			                
			        	}
			        }
			        angular.element(window).bind('scroll load', funCheckBounds);
				}
			};
			return directive;	
	})	
	.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
		$routeProvider
		.when('/home',{
			templateUrl: 'home/home.html'
		})
		.when('/person',{
			templateUrl: 'person/person.html'			
		})
		.when('/starship',{
			templateUrl: 'starship/starship.html'
		})
		.when('/species',{
			templateUrl: 'species/species.html'
		})
		.otherwise({
			redirectTo:'/home'
		})
		if(window.history && window.history.pushState){
		    $locationProvider.html5Mode({enabled: true,
                 requireBase: false});
	  	}
	}]);
})();
