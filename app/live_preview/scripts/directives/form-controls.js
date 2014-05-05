'use strict';

angular.module('designSystemApp')
    .directive('collapse', function() {
        return {
            restrict: 'A',
            link: function postLink(scope, element, attrs) {

                element.on({
                    click: function(e) {
                        element.toggleClass('open');

                    }

                });


            }
        }
    });