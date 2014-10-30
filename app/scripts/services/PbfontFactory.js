'use strict';

angular.module('designSystemApp')
  .factory('PbfontFactory', ['$http',
    function($http) {

      var pbfontData;

      return {
        getIconNames: function() {
          if (!pbfontData) {
            pbfontData = $http.get('scripts/data/pbfont_data.js').then(function(response) {
              return response.data;
            });
          }
          return pbfontData;
        }
      };

    }
  ]);
