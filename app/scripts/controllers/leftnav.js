'use strict';

angular.module('designSystemApp')
  .controller('LeftnavCtrl', ['$scope', 'PeopleFactory',
    function($scope, PeopleFactory) {

      PeopleFactory.getPeople().then(function(response) {
        $scope.tabledata = response.data;
      });

    }
  ]);