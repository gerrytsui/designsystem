'use strict';

/**
 * @ngdoc function
 * @name designSystemApp.controller:BootstrapUiDraggableModalCtrl
 * @description
 * # BootstrapUiDraggableModalCtrl
 * Controller of the designSystemApp
 */
angular.module('designSystemApp')
  .controller('BootstrapUiDraggableModalCtrl', function($scope, $modalInstance) {

    $scope.close = function() {
      $modalInstance.close();
    };

  });