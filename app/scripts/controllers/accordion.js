'use strict';

angular.module('designSystemApp')
    .controller('AccordionDemoCtrl', ['$scope',
        function($scope) {


            $scope.oneAtATime = true;

            $scope.groups = [{
                title: "Dynamic Group Header - 1",
                content: "Dynamic Group Body - 1"
            }, {
                title: "Dynamic Group Header - 2",
                content: "Dynamic Group Body - 2"
            }];

            $scope.items = ['Item 1', 'Item 2', 'Item 3'];

            $scope.addItem = function() {
                var newItemNo = $scope.items.length + 1;
                $scope.items.push('Item ' + newItemNo);
            };

            $('.panel-default').on('show.bs.collapse', function() {
                $(this).addClass('active');
            });

            $('.panel-default').on('hide.bs.collapse', function() {
                $(this).removeClass('active');
            });

        }
    ]);