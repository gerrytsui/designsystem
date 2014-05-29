'use strict';

angular.module('designSystemApp')

.directive('accordion', function() {
    return {
        restrict: 'A',
        link: function postLink(scope, element, attrs) {
            // var isOpen = $(this).siblings('div').hasClass('in');
            var isOpen = element.closest('.panel').find('.panel-collapse').hasClass('in');
            // var isOpen = element.attr('class');
            // if (element.closest('.panel').find('.panel-collapse').hasClass('in')) {
            //     element.addClass('collapsed')
            // }
            element.on({
                click: function(e) {
                    //element.toggleClass('open', 'isOpen');
                }
            });
        }
    };
});