'use strict';

angular.module('designSystemApp')
  .controller('MapsCtrl', ['$scope',
    function($scope) {

      $scope.leaflet = {
        center: {
          lat: 41.0374559,
          lng: -73.5395857,
          zoom: 15
        },
        defaults: {

        },
        markerSelected: 0,
        markers: {
          whq: {
            lat: 41.0374559,
            lng: -73.5395857,
            message: "World Headquarters",
            focus: true,
            draggable: false
          },
          danbury: {
            lat: 41.415743,
            lng: -73.419252,
            message: "Danbury",
            focus: false,
            draggable: false
          },
          troy: {
            lat: 42.6826591,
            lng: -73.7051468,
            message: "Troy",
            focus: false,
            draggable: false
          },
          lanham: {
            lat: 38.9504623,
            lng: -76.8369675,
            message: "Lanham",
            focus: false,
            draggable: false
          }
        },
        changeLocation: function(location) {
          $scope.leaflet.center.lat = $scope.leaflet.markers[location].lat;
          $scope.leaflet.center.lng = $scope.leaflet.markers[location].lng;
        }
      };




      $scope.map = {
        center: {
          latitude: 45,
          longitude: -73
        },
        zoom: 8
      };

    }
  ]);