(function() {
    'use strict';

    angular.module('starwarsApp')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'home/home.html',
                    controller: 'HomeController'
                })
                .state('character', {
                    url: '/character',
                    templateUrl: 'person/person.html',
                    controller: 'PersonController as person'
                })
                .state('character.details', {
                    url: '/character/:characterId',
                    templateUrl: 'person/person.html',
                    controller: 'PersonController as person'
                })
                .state('species', {
                    url: '/species',
                    templateUrl: 'species/species.html',
                    controller: 'SpeciesController as species'
                })
                .state('starship', {
                    url: '/starship',
                    templateUrl: 'starship/starship.html',
                    controller: 'StarshipController as starship'
                })
        }]);
})();
