(function() {
    'use strict';

    angular.module('starwarsApp')
        .controller('StarshipController', StarshipController);

    function StarshipController($scope, $http, starwarsConfig) {
        var starshipCtrl = this;

        starshipCtrl.starshipList = [];

        starshipCtrl.nextPage = null;
        starshipCtrl.isEndofPage = false;
        starshipCtrl.scrollInProgress = false;

        starshipCtrl.initData = InitData;

        starshipCtrl.toggleFlag = function(item) {
            if (item.detailPanelOpened === true) {
                item.detailPanelOpened = false;
            } else {
                item.detailPanelOpened = true;
            }
        }

        function InitData() {

            starshipCtrl.inProgress = true;

            var apiUrl = starwarsConfig.swapiUrl + starwarsConfig.swapiStarship;

			//only fetch data if not the end of page
            if (starshipCtrl.isEndofPage===false)
            {
	            if (starshipCtrl.nextPage) {
	                apiUrl = starshipCtrl.nextPage;
	            }

				//fetch the data from swapi api
	            $http.get(apiUrl).success(function(data) {

	                if (starshipCtrl.starshipList.length > 0) {
	                    starshipCtrl.starshipList.push.apply(starshipCtrl.starshipList, data.results);
	                } else {
	                    starshipCtrl.starshipList = data.results;
	                }
	                starshipCtrl.nextPage = data.next;

	                if (!data.next) {
	                    starshipCtrl.isEndofPage = true;
	                }

	                starshipCtrl.inProgress = false;
	            });
            }
        }

        //run process
        starshipCtrl.initData();
    };
})();
