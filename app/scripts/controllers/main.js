'use strict';

angular.module('designSystemApp').controller('MainCtrl', ['$scope', 'NavFactory', '$route', '$location',
  function($scope, NavFactory, $route, $location) {

    NavFactory.getNav().then(function(data) {
      $scope.navData = data.nav;
      $scope.predicate = 'label';
    });

    $scope.$on('$routeChangeSuccess', function(newVal, oldVal) {
      if (oldVal !== newVal) {
        $scope.routeClassName = $route.current.className;
        $scope.pgTitle = $route.current.pageTitle;
        //console.log('page title is:' + $scope.pgTitle);
      }
    });

    // $rootScope.$on("$routeChangeSuccess", function(currentRoute, previousRoute) {
    //     //Change page title, based on Route information
    //     $rootScope.pgTitle = $route.current.pageTitle;
    //     console.log('page title is:' + $rootScope.pgTitle);
    // });



    $scope.settings = {
      isFluid: true,
      isFixed: true,
      isOpen: false,
      show: function() {
        $scope.settings.isOpen = ($scope.settings.isOpen) ? false : true;
      }
    }

  }
]);