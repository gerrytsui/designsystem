'use strict';

angular.module('designSystemApp')
    .directive('bsPopover', function() {
        return {
            //template: '<div></div>',
            // restrict: 'A',
            link: function postLink(scope, element, attrs) {

                var $content = $('#' + attrs.contentId);

                element.popover({
                    trigger: 'click',
                    placement: 'bottom',
                    html: true,
                    container: 'body',
                    content: function() {
                        return $content.removeClass('hidden');
                    }
                });

                element.on('show.bs.popover', function() {
                    $('[bs-popover]').popover('hide');
                });

                element.on('shown.bs.popover', function() {
                    $('#' + attrs.contentId).find('input:first').focus();
                });

            }
        };
    });