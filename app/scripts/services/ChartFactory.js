'use strict';

angular.module('designSystemApp')
    .factory('ChartFactory', ['$http',
        function($http) {

            return {
                getChartData: function() {
                    var chartData = $http.get('scripts/data/flot_example_data.js').then(function(response) {
                        return response.data;
                    });

                    return chartData;
                }
            };

        }
    ]);