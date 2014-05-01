'use strict';

angular.module('designSystemApp')
  .controller('FacetedSearchCtrl', ['$scope', '$http',
    function($scope, $http) {

      $scope.products = [{
        name: 'Product 1',
        hardware: true,
        software: true
      }, {
        name: 'Product 2',
        hardware: false,
        software: false
      }, {
        name: 'Product 3',
        hardware: true,
        software: false
      }, {
        name: 'Product 1',
        hardware: true,
        software: false
      }];

      $scope.layout = 'list';


      $scope.search = {};

      $scope.facet = {
        visible: false
      };

      $scope.facet.clearAll = function() {
        $scope.search = {};
      };

      $scope.facet.clearSearch = function() {
        var isVisible = false;

        if (!angular.equals({}, $scope.search)) {
          isVisible = true;
        }

        return isVisible;
      };


    }
  ])
  .filter('count', function() {
    return function(obj, string) {
      var count = 0;

      angular.forEach(obj, function(o) {
        if (o[string] === true) {
          count++;
        }
      });

      return count;
    };
  });