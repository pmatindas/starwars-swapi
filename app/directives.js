(function() {
    'use strict';

    angular.module('starwarsApp')
        .directive('onScroll', function() {
            var directive = {
                restrict: 'AE',
                scope: {
                    onScroll: '&',
                    inProgress: '='
                },
                link: function(scope, elm, attr) {
                    var raw = elm[0];

                    var funCheckBounds = function(evt) {
                        var rectObject = raw.getBoundingClientRect();
                        var inProgress = false;

                        if ((rectObject.bottom <= window.innerHeight + 30) && scope.inProgress == false) {
                            scope.$apply(function() {

                                scope.onScroll();
                            });

                        }
                    }
                    angular.element(window).bind('scroll load', funCheckBounds);
                }
            };
            return directive;
        })
})();
