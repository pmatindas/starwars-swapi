describe('StarshipController', function() {
    var starshipCtrl, httpBackend;
    var starshipData = {
    "count": 37, 
    "next": "http://swapi.co/api/species/?page=2", 
    "previous": null, 
    "results": [
        {
            "name": "Sentinel-class landing craft", 
            "model": "Sentinel-class landing craft", 
            "manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks", 
            "cost_in_credits": "240000", 
            "length": "38", 
            "max_atmosphering_speed": "1000", 
            "crew": "5", 
            "passengers": "75", 
            "cargo_capacity": "180000", 
            "consumables": "1 month", 
            "hyperdrive_rating": "1.0", 
            "MGLT": "70", 
            "starship_class": "landing craft", 
            "pilots": [], 
            "films": [
                "http://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-10T15:48:00.586000Z", 
            "edited": "2014-12-22T17:35:44.431407Z", 
            "url": "http://swapi.co/api/starships/5/"
        }
        ]        
    };

    beforeEach(module('starwarsApp'));

    beforeEach(inject(function(starwarsConfig, SwapiService, $controller, $httpBackend) {
        httpBackend = $httpBackend;
        starshipCtrl = $controller('StarshipController', { starwarsConfig, SwapiService });
        httpBackend.when('GET', starwarsConfig.swapiStarship).respond(200, starshipData);
        httpBackend.flush();
    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should return person list', function() {
        //expect the list contains data
        expect(starshipCtrl.starshipList.length).toBeGreaterThan(0);
    });
});
