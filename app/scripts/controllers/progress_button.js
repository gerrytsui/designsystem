'use strict';

angular.module('designSystemApp')
      .controller('ProgressButtonCtrl', ['$scope','$timeout', 'ngProgress',
        function ($scope, $timeout, ngProgress) {
          $scope.buttonLoading = {
              isLoading: false,
              text: 'Saving',
              load: function() {
                  $scope.buttonLoading.isLoading = true;
                  $timeout(function() {
                      $scope.buttonLoading.isLoading = false;
                  }, 2000);
              }
          };

          $scope.buttonLoading2 = {
              isLoading: false,
              text: 'Updating',
              speed: 0.75,
              iconClass: 'fa-refresh',
              load: function() {
                  $scope.buttonLoading2.isLoading = true;
                  $timeout(function() {
                      $scope.buttonLoading2.isLoading = false;
                  }, 3000);
              }
          };


        }



    ]);
