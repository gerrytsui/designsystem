// Requires jQuery from http://jquery.com/
// and jQuerySparklines from http://omnipotent.net/jquery.sparkline

// AngularJS directives for jquery sparkline
angular.module('sparkline', []);

angular.module('sparkline')
    .directive('jqSparkline', [

        function() {
            'use strict';
            return {
                restrict: 'A',
                require: '?ngModel',
                scope: {
                    options: '=',
                    data: '='
                },
                link: function(scope, elem, attrs) {

                    //scope.data = scope.data || [10, 10, 10];

                    var options = {
                        type: 'line'
                    };

                    scope.options = angular.extend(options, scope.options);

                    elem.sparkline(scope.data, options);

                    /*
		  scope.$watch('data', function(newVal, oldVal) {
			console.log(newVal, oldVal);
		  });
		  */

                }
            };
        }
    ]);