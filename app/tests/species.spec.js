describe('SpeciesController', function() {
    var speciesCtrl, httpBackend;
    var speciesData = {
    "count": 37, 
    "next": "https://swapi.co/api/species/?page=2", 
    "previous": null, 
    "results": [
        {
            "name": "Rodian", 
            "classification": "sentient", 
            "designation": "reptilian", 
            "average_height": "170", 
            "skin_colors": "green, blue", 
            "hair_colors": "n/a", 
            "eye_colors": "black", 
            "average_lifespan": "unknown", 
            "homeworld": "http://swapi.co/api/planets/23/", 
            "language": "Galatic Basic", 
            "people": [
                "http://swapi.co/api/people/15/"
            ], 
            "films": [
                "http://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-10T17:05:26.471000Z", 
            "edited": "2014-12-20T21:36:42.144000Z", 
            "url": "http://swapi.co/api/species/4/"
        }
        ]        
    };

    beforeEach(module('starwarsApp'));

    beforeEach(inject(function(starwarsConfig, SwapiService, $controller, $httpBackend) {
        httpBackend = $httpBackend;
        speciesCtrl = $controller('SpeciesController', { starwarsConfig, SwapiService });
        httpBackend.when('GET', starwarsConfig.swapiSpecies).respond(200, speciesData);
        httpBackend.flush();
    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should return person list', function() {
        //expect the list contains data
        expect(speciesCtrl.speciesList.length).toBeGreaterThan(0);
    });
});
