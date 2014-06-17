'use strict';

angular.module('designSystemApp').controller('IndexCtrl', ['$scope', '$interval', 'ChartFactory', 'PeopleFactory',
    function($scope, $interval, ChartFactory, PeopleFactory) {


        $scope.switchStatus = {
            isOn: false
        };

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
        });


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
                    show: false
                    // font: {
                    //     color: "#fff"
                    // }
                },
                yaxis: {
                    show: true,
                    position: 'left'

                },
                colors: ['#bfdbf0', '#4094d3', '#185994'],
                tooltip: true,
                tooltipOpts: {
                    content: "%s: %y on %x",
                    onHover: function(flotItem, $tooltipEl) {
                        $tooltipEl.css({
                            'background': '#333',
                            'color': '#fff',
                            'border': 'none'
                        });
                    }
                }
            }
        };
        //end flot


        PeopleFactory.getPeople().then(function(response) {
            $scope.tabledata = response.data;
        });


        ChartFactory.getChartData().then(function(response) {
            $scope.flot.series = response.data;
        });





        $scope.sparkline = {
            options: {
                type: 'bar',
                height: '50px',
                barColor: '#00cb74',
                barWidth: 6,
                barSpacing: 2,
                chartRangeMin: 0,
                chartRangeMax: 100,
                highlightColor: '#ff4900',
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
                lineColor: '#8106A9',
                fillColor: '#c899d8',
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
                sliceColors: ['#0070c4', '#ffbf00', '#ff4900'],
                //highlightColor: '#000'
                highlightLighten: 0.8,
                tooltipFormat: '<span>{{value}}</span>'
            },
            data: [33, 33, 33]
        };

        $scope.sparkline4 = {
            options: {
                type: 'box',
                height: '50px',
                boxFillColor: '#00cb74',
                medianColor: '#ff4900',
                whiskerColor: '#ACACAD',
                tooltipFormat: '<span>{{value}}</span>'
            },
            data: [3.9, 4.1, 4.2, 4.3, 4.3, 4.4, 4.4, 4.4, 4.4, 4.5, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0, 5.1]
        };


        // pie chart variables
        $scope.colors = ['#ffbf00', '#ff9200', '#ff4900'];
        $scope.piesize = '120';
        $scope.pieThickness = '25';


        $scope.sample = {
            options: {
                animate: {
                    duration: 1000,
                    enabled: true
                },
                size: $scope.piesize,
                barColor: $scope.colors[2],
                scaleColor: false,
                lineWidth: $scope.pieThickness,
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
                lineWidth: $scope.pieThickness,
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
                lineWidth: $scope.pieThickness,
                lineCap: 'circle',
                trackColor: '#f2f2f2'
            },
            percent: 90
        };




    }
]);