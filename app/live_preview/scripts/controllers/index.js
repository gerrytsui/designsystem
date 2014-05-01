'use strict';

angular.module('designSystemApp').controller('IndexCtrl', ['$scope', '$interval', 'ChartFactory', 'PeopleFactory',
    function($scope, $interval, ChartFactory, PeopleFactory) {


        $scope.switchStatus = {
            isOn: false
        }

        var pieInterval;

        $scope.$watch('switchStatus.isOn', function(newVal, oldVal) {
            if (newVal) {
                pieInterval = $interval(function() {
                    $scope.sample.percent = (Math.random() * 100).toFixed(0);
                    $scope.sample2.percent = (Math.random() * 100).toFixed(0);
                    $scope.sample3.percent = (Math.random() * 100).toFixed(0);
                }, 3000);
            } else {
                $interval.cancel(pieInterval);
            }
        })


        $scope.testValidate = function() {
            $.each($scope.test.$error.required, function() {
                this.$dirty = true;
            });
        };

        $scope.nameValidate = function() {
            $.each($scope.name.$error.required, function() {
                this.$dirty = true;
            });
        };


        //flot
        $scope.flot = {
            series: [],
            options: {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: false
                    }
                },
                grid: {
                    borderWidth: 1,
                    minBorderMargin: 0,
                    labelMargin: 10,
                    margin: {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    hoverable: true
                },
                legend: {
                    show: true,
                    noColumns: 3,
                    margin: 10
                },
                xaxis: {
                    font: {
                        color: "#fff"
                    }
                },
                colors: ['#D0E1E7', '#71A6B9', '#215262'],
                tooltip: true,
                tooltipOpts: {
                    content: "%s: %y on %x",
                    onHover: function(flotItem, $tooltipEl) {
                        $tooltipEl.css({
                            'background': '#333',
                            'color': '#fff',
                            'border': 'none'
                        })
                    }
                }
            }
        }
        //end flot


        PeopleFactory.getPeople().then(function(response) {
            $scope.tabledata = response.data;
        });


        ChartFactory.getChartData().then(function(response) {
            $scope.flot.series = response.data;
        });


        $scope.colors = ['#D0E1E7', '#71A6B9', '#215262'];


        $scope.sparkline = {
            options: {
                type: 'bar',
                height: '50px',
                barColor: '#71A6B9',
                barWidth: 6,
                barSpacing: 2,
                chartRangeMin: 0,
                chartRangeMax: 100,
                highlightColor: '#D0E1E7',
                tooltipFormat: '<span>{{value}}</span>'
            },
            data: [100, 90, 80, 70, 80, 60, 60, 80, 85, 90, 70, 80]
        };

        $scope.sparkline2 = {
            options: {
                type: 'line',
                width: '100px',
                height: '50px',
                chartRangeMin: 0,
                chartRangeMax: 100,
                highlightColor: '#D0E1E7',
                lineWidth: '2',
                spotRadius: 0,
                lineColor: '#71A6B9',
                fillColor: '#D0E1E7',
                highlightLineColor: '#215262',
                tooltipFormat: '<span>{{y}}</span>'
            },
            data: [100, 90, 80, 70, 80, 60, 60, 80, 85, 90, 70, 80]
        };

        $scope.sparkline3 = {
            options: {
                type: 'pie',
                height: '50px',
                chartRangeMin: 0,
                chartRangeMax: 100,
                sliceColors: ['#D0E1E7', '#71A6B9', '#215262'],
                //highlightColor: '#000'
                highlightLighten: 0.8,
                tooltipFormat: '<span>{{value}}</span>'
            },
            data: [33, 33, 33]
        };



        $scope.piesize = '85';


        $scope.sample = {
            options: {
                animate: {
                    duration: 1000,
                    enabled: true
                },
                size: $scope.piesize,
                barColor: $scope.colors[2],
                scaleColor: false,
                lineWidth: 15,
                lineCap: 'circle',
                trackColor: '#f2f2f2'
            },
            percent: 65
        };

        $scope.sample2 = {
            options: {
                animate: {
                    duration: 1000,
                    enabled: true
                },
                size: $scope.piesize,
                barColor: $scope.colors[0],
                scaleColor: false,
                lineWidth: 15,
                lineCap: 'circle',
                trackColor: '#f2f2f2'
            },
            percent: 25
        };

        $scope.sample3 = {
            options: {
                animate: {
                    duration: 1000,
                    enabled: true
                },
                size: $scope.piesize,
                barColor: $scope.colors[1],
                scaleColor: false,
                lineWidth: 15,
                lineCap: 'circle',
                trackColor: '#f2f2f2'
            },
            percent: 90
        };




    }
]);