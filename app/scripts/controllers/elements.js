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

            $scope.grays = ['#323232', '#474748', '#59595B', '#838384', '#ACACAD', '#D5D5D6'];
            $scope.grays3 = ['#323232', '#59595B', '#ACACAD'];
            $scope.blues = ['#3322aa', '#3344cc', '#3366ff', '#668cff', '#99b2ff', '#ccd9ff'];
            $scope.blues3 = ['#3322aa', '#3366ff', '#99b2ff'];
            $scope.chColors = ['#00cb74', '#3366ff', '#8106a9', '#ffcc00', '#ff9200', '#ff4900'];


            /* COLORS */
            $scope.colorCharts = {

                grayscale: {
                    donut: {
                        data: [30, 20, 20, 13, 10, 7],
                        options: {
                            colors: $scope.grays,
                            series: {
                                pie: {
                                    innerRadius: 0.6,
                                    show: true,
                                    stroke: {
                                        width: 0
                                    }
                                }
                            }
                        }
                    },
                    pie: {
                        data: [33, 33, 33],
                        options: {
                            colors: $scope.grays3,
                            series: {
                                pie: {
                                    show: true,
                                    stroke: {
                                        width: 0
                                    }
                                }
                            }
                        }
                    },
                    bar: { //sparkline
                        options: {
                            type: 'bar',
                            height: '110px',
                            colorMap: $scope.grays,
                            barWidth: 27,
                            barSpacing: 6,
                            chartRangeMin: 0,
                            chartRangeMax: 100,
                            highlightColor: '#ff4900',
                            tooltipFormat: '<span>{{value}}</span>'
                        },
                        data: [100, 80, 60, 50, 40, 30]
                    }
                },
                blue: {
                    donut: {
                        data: [30, 20, 20, 13, 10, 7],
                        options: {
                            colors: $scope.blues,
                            series: {
                                pie: {
                                    innerRadius: 0.6,
                                    show: true,
                                    stroke: {
                                        width: 0
                                    }
                                }
                            }
                        }
                    },
                    pie: {
                        data: [33, 33, 33],
                        options: {
                            colors: $scope.blues3,
                            series: {
                                pie: {
                                    show: true,
                                    stroke: {
                                        width: 0
                                    }
                                }
                            }
                        }
                    },
                    bar: { //sparkline
                        options: {
                            type: 'bar',
                            height: '110px',
                            colorMap: $scope.blues,
                            barWidth: 27,
                            barSpacing: 6,
                            chartRangeMin: 0,
                            chartRangeMax: 100,
                            highlightColor: '#ff4900',
                            tooltipFormat: '<span>{{value}}</span>'
                        },
                        data: [100, 80, 60, 50, 40, 30]
                    }
                }

            };

            $scope.donutsVaried = {
                donut01: {
                    data: [30, 20, 20, 13, 10, 7],
                    options: {
                        colors: $scope.grays,
                        series: {
                            pie: {
                                innerRadius: 0.6,
                                show: true,
                                stroke: {
                                    width: 0
                                }
                            }
                        }
                    }
                },
                donut02: {
                    data: [30, 20, 20, 13, 10, 7],
                    options: {
                        colors: $scope.blues,
                        series: {
                            pie: {
                                innerRadius: 0.6,
                                show: true,
                                stroke: {
                                    width: 0
                                }
                            }
                        }
                    }
                },
                donut03: {
                    data: [30, 20, 20, 13, 10, 7],
                    options: {
                        colors: $scope.chColors,
                        series: {
                            pie: {
                                innerRadius: 0.6,
                                show: true,
                                stroke: {
                                    width: 0
                                }
                            }
                        }
                    }
                }
            }


        }
    ]);