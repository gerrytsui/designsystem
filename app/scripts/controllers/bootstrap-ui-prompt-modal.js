'use strict';

/**
 * @ngdoc function
 * @name designSystemApp.controller:BootstrapUiPromptModalCtrl
 * @description
 * # BootstrapUiPromptModalCtrl
 * Controller of the designSystemApp
 */
angular.module('designSystemApp')
  .controller('BootstrapUiPromptModalCtrl', function($scope, $modalInstance) {

    $scope.fullname = '';

    $scope.close = function() {
      $modalInstance.close();
    };

    $scope.save = function() {
      console.log($scope);
      console.log($scope.form.fullname.$modelValue);
      $modalInstance.close($scope.form.fullname.$modelValue);
    };

  });