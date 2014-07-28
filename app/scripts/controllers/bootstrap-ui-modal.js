'use strict';

/**
 * @ngdoc function
 * @name designSystemApp.controller:BootstrapUiModalCtrl
 * @description
 * # BootstrapUiModalCtrl
 * Controller of the designSystemApp
 */
angular.module('designSystemApp')
  .controller('BootstrapUiModalCtrl', function($scope, $modalInstance) {
    $scope.close = function() {
      $modalInstance.close();
    };
  });