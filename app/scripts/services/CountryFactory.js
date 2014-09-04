'use strict';

angular.module('designSystemApp')
  .factory('CountryFactory', ['$http',
    function($http) {

      var countryData;

      return {
        getCountries: function() {
          if (!countryData) {
            countryData = $http.get('scripts/data/country_data.js').then(function(response) {
              return response.data;
            });
          }
          return countryData;
        }
      };

    }
  ]);
