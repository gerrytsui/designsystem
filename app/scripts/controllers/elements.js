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

            $scope.getCategories = function() {
                var categories = [];

                angular.forEach($scope.icons, function(item) {
                    angular.forEach(item.categories, function(category) {
                        if (categories.indexOf(category) === -1) {
                            categories.push(category);
                        }
                    });
                });
                return categories;
            };


            $scope.buttonLoading = {
                isLoading: false,
                text: 'Saving',
                load: function() {
                    $scope.buttonLoading.isLoading = true;
                    $timeout(function() {
                        $scope.buttonLoading.isLoading = false;
                    }, 2000);
                }
            };

            $scope.buttonLoading2 = {
                isLoading: false,
                text: 'Updating',
                speed: 0.75,
                iconClass: 'fa-refresh',
                load: function() {
                    $scope.buttonLoading2.isLoading = true;
                    $timeout(function() {
                        $scope.buttonLoading2.isLoading = false;
                    }, 3000);
                }
            };

            // get the people data
            PeopleFactory.getPeople().then(function(response) {
                $scope.peopleData = response.data;
            });

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