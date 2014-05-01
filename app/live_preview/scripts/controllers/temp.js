'use strict';

angular.module('designSystemApp')
  .controller('TempCtrl', function($scope, tabledata) {

    $scope.tabledata = tabledata.getTableData();

    $scope.colors = ['#D0E1E7', '#71A6B9', '#215262'];

    $scope.colorFunction = function() {
      return function(d, i) {
        //console.log(d,i);
        return $scope.colors[i];
      };
    };

    $scope.exampleData = tabledata.getChartData();


  });