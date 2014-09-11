'use strict';

angular.module('designSystemApp')
    .controller('ElementsCtrl', ['$scope', '$route', '$location', '$timeout', '$log', 'NavFactory', 'FaIconFactory', 'PeopleFactory', 'ngProgress',
        function($scope, $route, $location, $timeout, $log, NavFactory, FaIconFactory, PeopleFactory, ngProgress) {

            //get the subnav data
            NavFactory.getSubNav('elements').then(function(data) {
                $scope.subnav = data;
                $scope.predicate = 'label';
            });

            // hilight the correct subnav item from the route param
            $scope.submenu = $route.current.params.section;

            // submenu item click
            $scope.select = function(submenu) {
                $scope.submenu = submenu;
                $location.path('#/elements?section=' + submenu);
            };

            // get fontawesome icon data
            FaIconFactory.getIcons().then(function(data) {
                $scope.icons = data;
                $scope.predicate = 'id';
            });

            // no longer used, but please keep around
            // $scope.getCategories = function() {
            //     var categories = [];
            //
            //     angular.forEach($scope.icons, function(item) {
            //         angular.forEach(item.categories, function(category) {
            //             if (categories.indexOf(category) === -1) {
            //                 categories.push(category);
            //             }
            //         });
            //     });
            //     return categories;
            // };


            // get the people data
            PeopleFactory.getPeople().then(function(response) {
                $scope.peopleData = response.data;
            });


            //datetimepicker1
            $scope.datetimepicker1 = {
                pickTime: false
            };

            //datetimepicker2
            $scope.datetimepicker2 = {
                pickDate: false
            };

            //numeric stepper
            $scope.numericStepper = {
                'limit': [0, ], // no negative numbers
                'wheelStep': 1,
                'arrowStep': 1
            };

            $scope.transitoryAlert = {
                fadeIn: 500,
                fadeOut: 1000,
                delay: 2000,
                message: '<strong>Test</strong> This is the message.',
                messageClass: 'text-danger'
            };

            $scope.setMessage = function() {
                $scope.transitoryAlert.messageClass = 'text-success';
                $scope.transitoryAlert.message = '<strong>Success!</strong> Data was saved.';
            };

            // show the ngProgress bar
            $scope.startProgress = function($event) {
                $event.preventDefault();
                ngProgress.start();
                $timeout(function() {
                    ngProgress.complete();
                    $scope.show = true;
                }, 1000);
            };

            // for the toggle buttons

            $scope.singleModel = 0;

            $scope.radioModel = 'Left';

            $scope.checkModel = [true, false, true, false];

            $scope.demo1 = {
                min: 20,
                max: 80
            };

      
        }
    ]);
