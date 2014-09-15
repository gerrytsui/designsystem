'use strict';

angular.module('designSystemApp')
    .controller('DatePickerCtrl', ['$scope', '$route',
        function($scope, $route) {

          //datetimepicker1
          $scope.datetimepicker1 = {
              pickTime: false
          };

          //datetimepicker2
          $scope.datetimepicker2 = {
              pickDate: false
          };
        }
    ]);
