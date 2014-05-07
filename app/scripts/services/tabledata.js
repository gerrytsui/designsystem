'use strict';

angular.module('designSystemApp')
  .service('tabledata', ['$http',
    function Tabledata($http) {

      var peopleData,
        invoiceData,
        chartData;

      var tableService = {
        getPeople: function() {
          if (!peopleData) {
            peopleData = $http.get('scripts/data/people_data.js').then(function(response) {
              return response.data;
            });
          }
          return peopleData;
        },
        getInvoice: function() {
          if (!invoiceData) {
            invoiceData = $http.get('scripts/data/invoice_data.js').then(function(response) {
              return response.data;
            });
          }
          return invoiceData;
        },
        getChartData: function() {
          if (!chartData) {
            chartData = $http.get('scripts/data/d3_example_data.js').then(function(response) {
              return response.data;
            });
          }
          return chartData;
        },
        getInvoiceLimit: function(limit) {
          var dataLimit = tableService.getInvoice().then(function(response) {
            response.data = response.data.slice(0, limit);
            return response.data;
          });

          return dataLimit;

        }
      };

      return tableService;

    }
  ]);