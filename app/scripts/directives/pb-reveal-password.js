'use strict';

/**
 * @ngdoc directive
 * @name designSystemApp.directive:pbRevealPassword
 * @description
 * # pbRevealPassword
 */
angular.module('designSystemApp')
  .directive('pbRevealPassword', function() {
    return {
      restrict: 'EA',
      scope: {
        password: '=',
        hideLabel: '='
      },
      link: function postLink(scope, element, attrs) {

        var $password = $('#' + scope.password),
          hideLabel = scope.hideLabel || 'Hide';

        element.on({
          click: function() {
            //console.log(scope);
            if ($password.attr('type') === 'password') {
              element.text(hideLabel);
              $password.attr('type', 'text');
            }
            else {
              element.text('Show');
              $password.attr('type', 'password');
            }

          }
        });

      }
    };
  });