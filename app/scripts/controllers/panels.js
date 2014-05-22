'use strict';

angular.module('designSystemApp').controller('PanelsCtrl', ['$scope', 'PeopleFactory',
    function($scope, PeopleFactory) {


        // get the people data
        PeopleFactory.getPeople().then(function(response) {
            $scope.peopleData = response.data;
        });


    }
]);