'use strict';

/**
 * @ngdoc directive
 * @name designSystemApp.directive:pbNumericStepper
 * @description
 * # pbNumericStepper
 */
angular.module('designSystemApp')
  .directive('pbNumericStepper', function() {
    return {
      restrict: 'EA',
      scope: {
        options: "="
      },
      link: function postLink(scope, element, attrs) {
        element.stepper(scope.options);
      }
    };
  });