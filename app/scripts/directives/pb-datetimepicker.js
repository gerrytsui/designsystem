'use strict';

/**
 * @ngdoc directive
 * @name designSystemApp.directive:pbDatetimepicker
 * @description
 * # pbDatetimepicker
 */
angular.module('designSystemApp')
  .directive('pbDatetimepicker', function() {
    return {
      restrict: 'EA',
      require: 'ngModel',
      scope: {
        ngModel: '='
      },
      link: function postLink(scope, element, attrs, ngModel) {
        element.datetimepicker(scope.ngModel);
      }
    };
  });