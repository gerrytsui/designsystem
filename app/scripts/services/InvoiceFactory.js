'use strict';

angular.module('designSystemApp')
  .factory('InvoiceFactory', ['$http',
    function($http) {

      return {
        getInvoice: function(limit) {
          var invoiceData = $http.get('scripts/data/invoice_data.js').then(function(response) {
            var d = response.data;

            if (limit) {
              d = d.data.slice(0, limit);
            }

            return d;
          });

          return invoiceData;
        }
      };

    }
  ]);