'use strict';

angular.module('designSystemApp')
  .controller('DataGridCtrl', ['$scope', 'InvoiceFactory',
    function($scope, InvoiceFactory) {


      $scope.pricingLength = [5, 10, 15, 20, 25];

      $scope.pricingLengthSelected = $scope.pricingLength[0];

      // get the invoice data
      InvoiceFactory.getInvoice($scope.pricingLengthSelected).then(function(response) {
        $scope.pricingdata = response;
        $scope.totalItems = $scope.pricingdata.length;
      });

      // length dropdown change
      $scope.pricingLengthChange = function() {
        InvoiceFactory.getInvoice($scope.pricingLengthSelected).then(function(response) {
          $scope.pricingdata = response;
        });
      };

      // calculate the total for each row
      $scope.total = function(index) {
        var expenses = $scope.pricingdata[index].expenses.slice(0, 4),
          total = 0;

        $.each(expenses, function(i, v) {
          total = total + parseFloat(v.balance.replace(',', ''));
        });

        return total.toFixed(2);
      };


      $scope.itemSelected = {
        isChecked: [],
        showAdd: false,
        showEdit: true,
        showDelete: true,
        deleteTooltip: 'Delete Record'
      };

      $scope.buttonHandler = function() {
        if ($scope.itemSelected.isChecked.length === 1) {
          $scope.itemSelected.showAdd = true;
          $scope.itemSelected.showEdit = false;
          $scope.itemSelected.showDelete = false;
          $scope.itemSelected.deleteTooltip = "Delete Record";
        }
        else if ($scope.itemSelected.isChecked.length > 1) {
          $scope.itemSelected.showAdd = true;
          $scope.itemSelected.showEdit = true;
          $scope.itemSelected.showDelete = false;
          $scope.itemSelected.deleteTooltip = "Delete Records";
        }
        else {
          $scope.itemSelected.showAdd = false;
          $scope.itemSelected.showEdit = true;
          $scope.itemSelected.showDelete = true;
          $scope.itemSelected.deleteTooltip = "Delete Record";
        }
      };

      $scope.itemHandler = function(list) {

        $scope.itemSelected.isChecked.length = [];

        angular.forEach(list, function(item) {
          if (angular.isDefined(item.selected) && item.selected === true) {
            $scope.itemSelected.isChecked.push(item);
          }
        });

        $scope.buttonHandler();
      };


      $scope.selectAllHandler = function(event) {
        //console.log($scope.itemSelected.isChecked.length);
        $scope.itemSelected.isChecked.length = [];

        if ($scope.selectAll === true) {
          angular.forEach($scope.pricingdata, function(item) {
            item.selected = true;
          });

          $scope.itemSelected.showAdd = true;
          $scope.itemSelected.showEdit = true;
          $scope.itemSelected.showDelete = false;
          $scope.itemSelected.deleteTooltip = "Delete Records";
        }
        else {
          angular.forEach($scope.pricingdata, function(item) {
            item.selected = false;
          });

          $scope.itemSelected.showAdd = false;
          $scope.itemSelected.showEdit = true;
          $scope.itemSelected.showDelete = true;
          $scope.itemSelected.deleteTooltip = "Delete Record";
        }
      };

      $scope.selectRow = function(index, item) {
        //console.log(item);
        if ($scope.pricingdata[index].selected === true) {
          $scope.pricingdata[index].selected = false;
          var i = $scope.itemSelected.isChecked.indexOf(item);
          $scope.itemSelected.isChecked.splice(i, 1);
        }
        else {
          $scope.pricingdata[index].selected = true;
          $scope.itemSelected.isChecked.push(item);
        }

        $scope.buttonHandler();
      };

      // $scope.totalItems = 100;
      $scope.currentPage = 1;
      $scope.maxSize = $scope.pricingLengthSelected;

      $scope.setPage = function(pageNo) {
        $scope.currentPage = pageNo;
      };

      $scope.bigTotalItems = 175;
      $scope.bigCurrentPage = 1;


    }
  ]);