(function() {
    'use strict';

    angular.module('starwarsApp')
        .controller('PersonController', PersonController);

    PersonController.$inject = ['starwarsConfig', 'SwapiService'];

    function PersonController(starwarsConfig, swapiService) {
        var personCtrl = this;

        personCtrl.personList = [];
        personCtrl.nextPage = null;
        personCtrl.isEndofPage = false;
        personCtrl.scrollInProgress = false;
        personCtrl.initData = InitData;
        personCtrl.toggleFlag = ToggleFlag;

        function ToggleFlag(item) {
            if (item.detailPanelOpened === true) {
                item.detailPanelOpened = false;
            } else {
                item.detailPanelOpened = true;
            }
        }

        function InitData() {
            personCtrl.inProgress = true;            

            //only fetch data if not the end of page
            if (personCtrl.isEndofPage === false) {
                if (personCtrl.nextPage) {
                    apiUrl = personCtrl.nextPage;
                }

                swapiService.list(starwarsConfig.swapiPerson)
                    .then(
                        function(response) {
                            if (personCtrl.personList.length > 0) {
                                personCtrl.personList.push.apply(personCtrl.personList, response.data.results);
                            } else {
                                personCtrl.personList = response.data.results;
                            }
                            personCtrl.nextPage = response.data.next;

                            if (!response.data.next) {
                                personCtrl.isEndofPage = true;
                            }

                            personCtrl.inProgress = false;
                        },
                        function(error) {
                            console.log('<!-- error -->', error);
                        });
            }
        }

        //run process
        personCtrl.initData();
    }
})();
