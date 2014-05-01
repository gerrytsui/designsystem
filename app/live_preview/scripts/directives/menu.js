'use strict';

angular.module('designSystemApp')
  .directive('menu', function() {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

        /*$(window).on('resize', function(e) {
          console.log('message 1', e.target.outerWidth, e.target.outerHeight);
        });*/

        var $body = $('body'),
          $menuButton = element.find('#menu-collapse'),
          $mainNavItems = element.find('ul:first > li > a');

        $menuButton.on({
          click: function(e) {
            $body.toggleClass('minified');
          }
        });

        $mainNavItems.on({
          click: function(e) {

            //if minified and there is a submenu, prevent the click event
            if ($body.hasClass('minified') && $(this).parent().find('ul').length > 0) {
              return false;
            };

            // collapse other containers 
            $mainNavItems.not('.collapsed').not($(this)).click();

          }
        });

      }
    };
  });