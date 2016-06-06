(function() {
    'use strict';

    angular.module('starwarsApp')
        .controller('StarshipController', StarshipController);

    StarshipController.$inject = ['starwarsConfig', 'SwapiService'];
    
    function StarshipController(starwarsConfig, swapiService) {
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
            var apiUrl = starwarsConfig.swapiStarship;

			//only fetch data if not the end of page
            if (starshipCtrl.isEndofPage===false)
            {
	            if (starshipCtrl.nextPage) {
	                apiUrl = starshipCtrl.nextPage;
	            }

				swapiService.list(apiUrl)
                    .then(
                        function(response) {
                            if (starshipCtrl.starshipList.length > 0) {
                                starshipCtrl.starshipList.push.apply(starshipCtrl.starshipList, response.data.results);
                            } else {
                                starshipCtrl.starshipList = response.data.results;
                            }
                            starshipCtrl.nextPage = response.data.next;

                            if (!response.data.next) {
                                starshipCtrl.isEndofPage = true;
                            }

                            starshipCtrl.inProgress = false;
                        },
                        function(error) {
                            console.log('<!-- error -->', error);
                        });
            }
        }

        //run process
        starshipCtrl.initData();
    };
})();
