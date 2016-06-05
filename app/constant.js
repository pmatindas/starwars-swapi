(function() {
    'use strict';

    angular.module('starwarsApp')    	
        .constant('starwarsConfig',{
        	swapiUrl:'http://swapi.co/api/',
        	swapiPerson:'people',
        	swapiStarship: 'starships',
        	swapiFilm: 'films',
        	swapiSpecies: 'species'
        });

})();