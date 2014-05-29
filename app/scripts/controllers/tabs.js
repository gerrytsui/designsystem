'use strict';


angular.module('designSystemApp')
    .controller('TabsDemoCtrl', ['$scope',
        function($scope) {
            $scope.tabs = [{
                title: "Dynamic Title 1",
                content: "I am text defined in the Controller."
            }, {
                title: "Dynamic Title 2",
                content: "I am also text defined in the Controller.",
                disabled: true
            }];

            $scope.alertMe = function() {
                setTimeout(function() {
                    window.alert("You've selected the alert tab!");
                });
            };

            $scope.navType = 'pills';


        }
    ]);