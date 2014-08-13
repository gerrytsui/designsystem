'use strict';

/**
 * @ngdoc service
 * @name designSystemApp.millerColumn
 * @description
 * # millerColumn
 * Factory in the designSystemApp.
 */
angular.module('designSystemApp')
  .factory('MillerColumnFactory', ['$http', function ($http) {

    // Public API here
    return {
      getColumnData: function () {
        var columnData = $http.get('scripts/data/MillerColumn.js').then(function(response) {
            return response.data;
        });

        return columnData;
      }
    };
  }]);
