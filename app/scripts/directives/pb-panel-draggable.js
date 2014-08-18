'use strict';

/**
 * @ngdoc directive
 * @name designSystemApp.directive:pbPanelDraggableCollapsible
 * @description
 * # pbPanelDraggableCollapsible
 */
angular.module('designSystemApp')
  .directive('pbPanelDraggable', function () {
    return {
      restrict: 'EA',
      require: 'ngModel',
      scope: {
        ngModel: '='
      },
      link: function postLink(scope, element, attrs, ngModel) {
        element.find('.column').sortable(scope.ngModel).disableSelection();
      }
    };
  });
