(function() {
    'use strict';

    angular.module('starwarsApp')    	
        .constant('starwarsConfig',{        	
        	swapiPerson:'https://swapi.co/api/people',
        	swapiStarship: 'https://swapi.co/api/starships',
        	swapiFilm: 'https://swapi.co/api/films',
        	swapiSpecies: 'https://swapi.co/api/species'
        });

})();
