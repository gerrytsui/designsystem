'use strict';

angular.module('designSystemApp')
    .directive('loadingbtn', function() {
        return {
            restrict: 'AE',
            link: function postLink(scope, element, attrs) {
                element.on('click', function(event) {
                    element.button('loading');

                    // $.ajax(...).always(function() {
                    //     element.button('reset')
                    // });

                    // simulation:
                    setTimeout(function() {
                        element.button('reset')
                    }, 2000);

                });
            }
        };
    });