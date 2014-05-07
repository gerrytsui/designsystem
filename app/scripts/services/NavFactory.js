'use strict';

angular.module('designSystemApp')
  .factory('NavFactory', ['$http',
    function($http) {

      return {
        getNav: function() {
          var navData = $http.get('scripts/data/nav_data.js').then(function(response) {
            return response.data;
          });

          return navData;
        },
        getSubNav: function(subnav) {

          var $subnav = this.getNav().then(function(data) {
            var subnavData;

            angular.forEach(data.nav, function(v, k) {
              if (angular.lowercase(v.label) === angular.lowercase(subnav)) {
                subnavData = v;
              }
            });

            return subnavData;
          });

          return $subnav;
        }

      };

    }
  ]);