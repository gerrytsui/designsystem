'use strict';

angular.module('designSystemApp')
    .factory('FaIconFactory', ['$http',
        function($http) {

            return {
                getIcons: function() {
                    var icons = $http.get('scripts/data/fa_icons.js').then(function(response) {
                        return response.data.icons;
                    });

                    return icons;
                },
                // getIconsByGroup:function() {
                //    var allIcons = getIcons();
                // }
            };
        }
    ]);