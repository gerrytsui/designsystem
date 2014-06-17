'use strict';

angular.module('designSystemApp').controller('PanelsCtrl', ['$scope', 'PeopleFactory',
    function($scope, PeopleFactory) {


        // get the people data
        PeopleFactory.getPeople().then(function(response) {
            $scope.peopleData = response.data;
        });

        $('.column').sortable({
            connectWith: '.column',
            handle: '.panel-heading',
            cursor: 'move',
            placeholder: 'placeholder',
            forcePlaceholderSize: true,
            opacity: 0.4,
            stop: function(event, ui) {
                $(ui.item).find('h2').click();
            }
        })
            .disableSelection();

        $('.collapse-btn.glyphicon-chevron-up').on('click', function(event) {
            var isOpen = $(this).hasClass('glyphicon-chevron-up');
            if (isOpen) {
                $(this).closest('.panel').find('.panel-body').slideUp(200);
                $(this).removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
            } else {
                $(this).closest('.panel').find('.panel-body').slideDown(200);
                $(this).removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
            }
            event.preventDefault();
        });



    }
]);