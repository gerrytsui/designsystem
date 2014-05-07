'use strict';

angular.module('designSystemApp').controller('HeadersCtrl', ['$scope', 'FakeNavFactory',
  function($scope, FakeNavFactory) {

    $scope.fakeNavData = FakeNavFactory.getFakeNavData();

  }
]);