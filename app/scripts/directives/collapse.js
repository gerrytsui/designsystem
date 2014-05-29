'use strict';

angular.module('designSystemApp')

.directive('collapse', function() {
    return {
        restrict: 'A',
        link: function postLink(scope, element, attrs) {
            var isOpen = $(this).siblings('div').hasClass('in');
            element.on({
                click: function(e) {
                    element.toggleClass('open', 'isOpen');
                }
            });
        }
    };
});