'use strict';

angular.module('designSystemApp')
  .service('NavService', ['$http',
    function NavService($http) {

      var navData;

      var NavService = {
        getNav: function() {
          if (!navData) {
            navData = $http.get('scripts/data/nav_data.js').then(function(response) {
              return response.data;
            });
          }
          return navData;
        },
        getSubNav: function(subnav) {

          var $subnav = NavService.getNav().then(function(data) {
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

      return NavService;

    }
  ]);