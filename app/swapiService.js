(function() {
        'use strict';

        angular.module('starwarsApp')
            .factory('SwapiService', SwapiService);

        SwapiService.$inject = ['$http', '$q'];

        function SwapiService($http, $q) {
            return {
                list: getSwapiData
            };

            function getSwapiData(swapiUrl) {

                return $q(function(resolve, reject) {
                        $http.get(swapiUrl)
                            .then(function(response) {
                                return resolve(response);
                            }, function(error) {
                                return reject(error);
                            });
                });
        }
    }
})();
