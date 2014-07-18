'use strict';


angular.module('designSystemApp')
    .controller('KendoDemoCtrl', ['$scope', '$timeout',
        function($scope, $timeout) {
    // $scope.sliderValue = 4;
    // $scope.sliderOptions = {
    //     tickPlacement: 'none'
    // };

            // splitter
            $scope.orientation = "horizontal";
            $scope.hello = "Hello from Controller!";
            $scope.splitterOptions = {

            };

            // // multi-select
            // $scope.selectOptions = {
            //     placeholder: "Select products...",
            //     dataTextField: "ProductName",
            //     dataValueField: "ProductID",
            //     autoBind: false,
            //     dataSource: {
            //         type: "odata",
            //         serverFiltering: true,
            //         transport: {
            //             read: {
            //                 url: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products",
            //             }
            //         }
            //     }
            // };
            // $scope.selectedIds = [4, 7];


            // // dropdowns
            // $scope.productsDataSource = {
            //     type: "odata",
            //     serverFiltering: true,
            //     transport: {
            //         read: {
            //             url: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products",
            //         }
            //     }
            // };

            // $scope.customersDataSource = {
            //     transport: {
            //         read: {
            //             dataType: "jsonp",
            //             url: "http://demos.telerik.com/kendo-ui/service/Customers",
            //         }
            //     }
            // };


            // // progress bar
            // $scope.status = "Working...";
            // $scope.progress = 0;
            // $scope.labels = [
            //     "Sined",
            //     "Seeled",
            //     "Delivered"
            // ];
            // var i = -1;

            // function update() {
            //     $scope.progress += random(0, 10);
            //     if ($scope.progress > random(70, 90)) {
            //         $scope.progress = random(5, 50);
            //         i = (i + 1) % $scope.labels.length;
            //         $scope.status = $scope.labels[i];
            //     }
            //     $timeout(update, 200);
            // }

            // function random(a, b) {
            //     return a + Math.floor(Math.random() * (b - a));
            // }
            // update();

            // // notifications
            // $scope.showInContainer = function() {
            //     var msg = 'Hello World';
            //     $scope.notf2.show(msg, "info");
            // };
            // $scope.dismissAll = function() {
            //     $scope.notf1.hide();
            //     $scope.notf2.hide();
            // };



        }
    ]);