'use strict';

angular.module('designSystemApp')
  .directive('pbFixedNavbar', function() {
    return {
      restrict: 'AE',
      link: function postLink(scope, element, attrs) {
        $(window).scroll(function() {
          if ($(this).scrollTop() > 20) {
            element.addClass('shadow');
          }
          else {
            element.removeClass('shadow');
          }
        });
      }
    };
  });