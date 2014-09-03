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

            $scope.colors = {
              blues: {
                '$blue1': '#3322aa',
                '$blue2': '#3344cc',
                '$blue3': '#3366ff',
                '$blue4': '#668cff',
                '$blue5': '#99b2ff',
                '$blue6': '#ccd9ff',
                all: function(){
                  return [this.$blue1, this.$blue2, this.$blue3, this.$blue4, this.$blue5, this.$blue6];
                }
              },
              grays: {
                '$gray1': '#323232',
                '$gray2': '#474748',
                '$gray3': '#59595B',
                '$gray4': '#838384',
                '$gray5': '#ACACAD',
                '$gray6': '#D5D5D6',
                all: function(){
                  return [this.$gray1, this.$gray2, this.$gray3, this.$gray4, this.$gray5, this.$gray6];
                }
              },
              charts: {
                '$green': '#00cb74',
                '$blue': '#3366ff',
                '$purple': '#8106a9',
                '$yellow': '#ffcc00',
                '$orange': '#ff9200',
                '$red': '#ff4900',
                all: function() {
                  return [this.$green, this.$blue, this.$purple, this.$yellow, this.$orange, this.$red ];
                }
              }
            };


            //generate easypiechart
            $scope.easypiechart = function(size, barColor, lineWidth, percent){
              var config = {
                "options": {
                    "animate": {
                        "enabled": false
                    },
                    "size": size,
                    "barColor": barColor,
                    "scaleColor": false,
                    "lineWidth": lineWidth,
                    "lineCap": 'circle',
                    "trackColor": '#f2f2f2'
                },
                "percent": percent
              };

              return config;
            };

            //generate flot donut chart
            $scope.donut = function(data, colors, innerRadius){
                var config = {
                  "data": data,
                  "options": {
                      "colors": colors,
                      "series": {
                          "pie": {
                              "innerRadius": 0.6,
                              "show": true,
                              "stroke": {
                                  "width": 0
                              }
                          }
                      }
                  }
                };

                return config;
            };

            // generate flot pie chart
            $scope.pie = function(data, colors, strokeWidth, strokeColor){
                var config = {
                  "data": data,
                  "options": {
                      "colors": colors,
                      "series": {
                          "pie": {
                              "show": true,
                              "stroke": {
                                  width: (strokeWidth) ? strokeWidth : 0,
                                  color: (strokeColor) ? strokeColor : '#fff'
                              }
                          }
                      }
                  }
                };

                return config;
            };

            // generate sparkline bar chart
            $scope.bar = function(data, height, colors, barWidth, barSpacing){
                var config = {
                  "options": {
                      "type": 'bar',
                      "height": height,
                      "colorMap": colors,
                      "barWidth": barWidth,
                      "barSpacing": barSpacing,
                      "chartRangeMin": 0,
                      "chartRangeMax": 100,
                      "disableHighlight": true,
                      "disableTooltips": true
                  },
                  "data": data
                };

                return config;
            };


            /* COLORS */
            $scope.colorCharts = {
                grayscale: {
                  donut: $scope.donut([30,20,20,13,10,7], $scope.colors.grays.all()),
                  pie: $scope.pie([33,33,33], [$scope.colors.grays.$gray1, $scope.colors.grays.$gray4, $scope.colors.grays.$gray5]),
                  bar: $scope.bar([100,80,60,50,40,30], '110px', $scope.colors.grays.all(), 27, 6)
                },
                blue: {
                  donut: $scope.donut([30,20,20,13,10,7], $scope.colors.blues.all()),
                  pie: $scope.pie([33,33,33], [$scope.colors.blues.$blue1, $scope.colors.blues.$blue4, $scope.colors.blues.$blue5]),
                  bar: $scope.bar([100,80,60,50,40,30], '110px', $scope.colors.blues.all(), 27, 6)
                }
            };


            $scope.donutsVaried = {
                donut01: $scope.donut([30,20,20,13,10,7], $scope.colors.grays.all()),
                donut02: $scope.donut([30,20,20,13,10,7], $scope.colors.blues.all()),
                donut03: $scope.donut([30,20,20,13,10,7], [$scope.colors.blues.$blue1, $scope.colors.charts.$orange,$scope.colors.blues.$blue3,$scope.colors.blues.$blue4, $scope.colors.blues.$blue5, $scope.colors.blues.$blue6]),
            };
            $scope.radial_01 = $scope.easypiechart(100, $scope.colors.blues.$blue1, 20, 63 );
            $scope.radial_02 = $scope.easypiechart(100, $scope.colors.blues.$blue6, 20, 37 );
            $scope.radial_03 = $scope.easypiechart(100, $scope.colors.blues.$blue4, 20, 90 );


            $scope.percentage_01 = $scope.easypiechart(100, $scope.colors.charts.$green, 20, 90 );
            $scope.percentage_02 = $scope.easypiechart(100, $scope.colors.charts.$blue, 20, 75 );
            $scope.percentage_03 = $scope.easypiechart(100, $scope.colors.charts.$purple, 20, 63 );
            $scope.percentage_04 = $scope.easypiechart(100, $scope.colors.charts.$yellow, 20, 50 );
            $scope.percentage_05 = $scope.easypiechart(100, $scope.colors.charts.$orange, 20, 37 );
            $scope.percentage_06 = $scope.easypiechart(100, $scope.colors.charts.$red, 20, 10 );

            $scope.donut_chart = $scope.donut([30,20,20,13,10,7], $scope.colors.charts.all());
            $scope.pie_chart = $scope.pie([25,25,25,12,8,5], $scope.colors.charts.all(), 1);

            $scope.tri_pie_01 = $scope.pie([33,33,33], [$scope.colors.charts.$green, $scope.colors.charts.$purple, $scope.colors.charts.$orange]);
            $scope.tri_pie_02 = $scope.pie([33,33,33], [$scope.colors.charts.$blue, $scope.colors.charts.$yellow, $scope.colors.charts.$red]);
            $scope.tri_pie_03 = $scope.pie([33,33,33], [$scope.colors.charts.$green, $scope.colors.charts.$blue, $scope.colors.charts.$purple]);
            $scope.tri_pie_04 = $scope.pie([33,33,33], [$scope.colors.charts.$yellow, $scope.colors.charts.$orange, $scope.colors.charts.$red]);
            $scope.tri_pie_05 = $scope.pie([33,33,33], [$scope.colors.charts.$green, $scope.colors.charts.$yellow, $scope.colors.charts.$red]);
            $scope.tri_pie_06 = $scope.pie([33,33,33], [$scope.colors.blues.$blue1, $scope.colors.blues.$blue3, $scope.colors.blues.$blue6]);

            $scope.bar_chart_01 = $scope.bar([100,80,60,50,40,30], '110px', $scope.colors.charts.all(), 27, 6);
        }
    ]);
