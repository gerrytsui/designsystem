'use strict';

angular.module('designSystemApp').controller('PanelsCtrl', ['$scope', '$log', 'PeopleFactory', 'MillerColumnFactory',
    function($scope, $log, PeopleFactory, MillerColumnFactory) {


        // get the people data
        PeopleFactory.getPeople().then(function(response) {
          $scope.peopleData = response.data;
        });

        // miller column
        $scope.millercolumn = {
          data: null,
          level1: null,
          level2: null
        };

        MillerColumnFactory.getColumnData().then(function(response){
          $scope.millercolumn.data = response.versionInfos;
        });

        $scope.getSublevel1 = function(index){
          $scope.millercolumn.level1 = $scope.millercolumn.data[index].versionInfos;
          $scope.millercolumn.dataSelected = index;
          $scope.millercolumn.level2 = null;
          $scope.millercolumn.level1Selected = null;
          //$log.log($scope.level1);
        };

        $scope.getSublevel2 = function(index){
          $scope.millercolumn.level2 = $scope.millercolumn.level1[index].versionInfos;
          $scope.millercolumn.level1Selected = index;
        };


        // THIS NEEDS TO BE TURNED INTO DIRECTIVE(S)
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
