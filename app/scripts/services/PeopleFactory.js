'use strict';

angular.module('designSystemApp')
  .factory('PeopleFactory', ['$http',
    function($http) {

      var peopleData;

      return {
        getPeople: function() {
          if (!peopleData) {
            peopleData = $http.get('scripts/data/people_data.js').then(function(response) {
              return response.data;
            });
          }
          return peopleData;
        }
      };

    }
  ]);