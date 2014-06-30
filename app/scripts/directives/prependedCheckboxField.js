'use strict';

angular.module('designSystemApp')

// .directive('pcb', function() {
//     return {
//         restrict: 'A',
//         link: function postLink(scope, element, attrs) {
//             element.on({
//                 change: function(e) {
//                     if (element.is(':checked')) {
//                         element.closest('.input-group').find('.focus-target').removeAttr('disabled')
//                         element.closest('.input-group').find('.focus-target').focus();
//                     } else {
//                         element.closest('.input-group').find('.focus-target').attr('disabled', 'disabled');
//                         element.closest('.input-group').find('.focus-target').blur();
//                     }
//                 }
//             });
//         }
//     };
// });

.directive('checkableInput', ['$timeout',
    function($timeout) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/templates/checkable-input.html',
            scope: {
                id: '@',
                model: '='
            },
            link: function(scope, element, attrs) {
                // Watch the model on the scope, when the value changes,
                // fire either focus or blur depending on the value.
                // It also checks for an old value, to make sure that it
                // doesn't fire blur when initially setting the value.
                // The else if can be taken out and just replaced with
                // an else if you want. Hope this helps!
                scope.$watch('model', function(newValue, oldValue) {
                    if (newValue === true) {
                        $timeout(function() {
                            element.find('input[type="text"]')[0].focus();

                        });
                    } else if (newValue === false && oldValue) {
                        $timeout(function() {
                            element.find('input[type="text"]')[0].blur();
                        });
                    }
                });
            }
        };
    }
]);