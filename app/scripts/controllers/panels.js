'use strict';

angular.module('designSystemApp').controller('PanelsCtrl', ['$scope', '$log', 'PeopleFactory', 'MillerColumnFactory',
    function($scope, $log, PeopleFactory, MillerColumnFactory) {


        // get the people data
        PeopleFactory.getPeople().then(function(response) {
          $scope.peopleData = response.data;
        });

        // miller column
        $scope.millercolumn = {
          data: null,
          level1: null,
          level2: null
        };

        MillerColumnFactory.getColumnData().then(function(response){
          $scope.millercolumn.data = response.versionInfos;
        });

        $scope.getSublevel1 = function(index){
          $scope.millercolumn.level1 = $scope.millercolumn.data[index].versionInfos;
          $scope.millercolumn.dataSelected = index;
          $scope.millercolumn.level2 = null;
          $scope.millercolumn.level1Selected = null;
          //$log.log($scope.level1);
        };

        $scope.getSublevel2 = function(index){
          $scope.millercolumn.level2 = $scope.millercolumn.level1[index].versionInfos;
          $scope.millercolumn.level1Selected = index;
        };


        //draggable options
        $scope.draggable = {
          connectWith: '.column',
          handle: '.panel-heading',
          cursor: 'move',
          placeholder: 'placeholder',
          forcePlaceholderSize: true,
          opacity: 0.4
        };

    }
]);
