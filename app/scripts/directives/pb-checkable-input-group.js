'use strict';

angular.module('designSystemApp')
  .directive('pbCheckableInputGroup', ['$timeout',
    function($timeout) {
      return {
        restrict: 'EA',
        scope: false,
        link: function(scope, element, attrs) {

          var $checkbox = element.find('span :checkbox');

          $checkbox.on({
            change: function() {
              if ($(this).is(':checked')) {
                $timeout(function() {
                  element.find('input').focus();
                });
              }
            }
          });
        }
      };
    }
  ]);