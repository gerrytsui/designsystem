'use strict';

angular.module('designSystemApp')
  .service('faIconsService', ['$http',
    function faIconsService($http) {

      var faIconsService = {
        getIcons: function() {
          var promise = $http.get('scripts/data/fa_icons.js').then(function(response) {
            //console.log(response);
            return response.data.icons;
          });

          return promise;
        }
      };

      return faIconsService;

    }
  ]);