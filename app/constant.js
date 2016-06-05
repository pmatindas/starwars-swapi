(function() {
    'use strict';

    angular.module('starwarsApp')    	
        .constant('starwarsConfig',{        	
        	swapiPerson:'http://swapi.co/api/people',
        	swapiStarship: 'http://swapi.co/api/starships',
        	swapiFilm: 'http://swapi.co/api/films',
        	swapiSpecies: 'http://swapi.co/api/species'
        });

})();