(function() {
    'use strict';

    angular.module('starwarsApp')
        .controller('SpeciesController', SpeciesController);

	SpeciesController.$inject = ['starwarsConfig', 'SwapiService'];
    
    function SpeciesController(starwarsConfig, swapiService) {
        var speciesCtrl = this;

        speciesCtrl.speciesList = [];

        speciesCtrl.nextPage = null;
        speciesCtrl.isEndofPage = false;
        speciesCtrl.scrollInProgress = false;

        speciesCtrl.initData = InitData;

        speciesCtrl.toggleFlag = function(item) {
            if (item.detailPanelOpened === true) {
                item.detailPanelOpened = false;
            } else {
                item.detailPanelOpened = true;
            }
        }

        function InitData() {
            speciesCtrl.inProgress = true;            

            //only fetch data if not the end of page
            if (speciesCtrl.isEndofPage === false) {
                if (speciesCtrl.nextPage) {
                    apiUrl = speciesCtrl.nextPage;
                }
                swapiService.list(starwarsConfig.swapiSpecies)
                    .then(
                        function(response) {
                            if (speciesCtrl.speciesList.length > 0) {
                                speciesCtrl.speciesList.push.apply(speciesCtrl.speciesList, response.data.results);
                            } else {
                                speciesCtrl.speciesList = response.data.results;
                            }
                            speciesCtrl.nextPage = response.data.next;

                            if (!response.data.next) {
                                speciesCtrl.isEndofPage = true;
                            }

                            speciesCtrl.inProgress = false;
                        },
                        function(error) {
                            console.log('<!-- error -->', error);
                        });
            }
        }

        //run process
        speciesCtrl.initData();
    };
})();
