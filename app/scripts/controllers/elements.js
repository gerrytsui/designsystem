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
                        if (categories.indexOf(category) == -1) {
                            categories.push(category);
                        }
                    })
                });
                return categories;
            }

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

            $scope.singleModel = 1;

            $scope.radioModel = 'Middle';

            $scope.checkModel = {
                left: false,
                middle: true,
                right: false
            };



        }
    ]);