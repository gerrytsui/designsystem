'use strict';

angular.module('designSystemApp')
  .controller('LeftnavCtrl', ['$scope', 'PeopleFactory', '$route', '$location',
    function($scope, PeopleFactory, $route, $location) {

      PeopleFactory.getPeople().then(function(response) {
        $scope.tabledata = response.data;
      });


      /*
      the route in app.js has reloadOnSearch set to false to prevent the controller 
      reloading on route change. Use the $routeUpdate event to set the title with
      $location.search()
      */

      $scope.title = $location.search().section;

      $scope.$on('$routeUpdate', function(newVal, oldVal) {
        $scope.title = $location.search().section;
      });

    }
  ]);