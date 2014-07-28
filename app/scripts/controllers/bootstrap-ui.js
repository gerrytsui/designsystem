'use strict';

/**
 * @ngdoc function
 * @name designSystemApp.controller:BootstrapUiCtrl
 * @description
 * # BootstrapUiCtrl
 * Controller of the designSystemApp
 */
angular.module('designSystemApp')
  .controller('BootstrapUiCtrl', function($scope, $modal, $timeout, $window) {

    $scope.modals = {

      simple: function() {
        $modal.open({
          templateUrl: 'scripts/controllers/templates/bootstrap-ui/modals/simple.html',
          controller: 'BootstrapUiSimpleModalCtrl'
        });
      },
      modal: function() {
        $modal.open({
          templateUrl: 'scripts/controllers/templates/bootstrap-ui/modals/modal.html',
          controller: 'BootstrapUiModalCtrl',
          keyboard: false,
          backdrop: 'static'
        });
      },
      prompt: function() {
        $modal.open({
          templateUrl: 'scripts/controllers/templates/bootstrap-ui/modals/prompt.html',
          controller: 'BootstrapUiPromptModalCtrl',
          keyboard: false,
          backdrop: 'static'
        }).result.then(function(fullname) {
          console.log('fullname: ' + fullname);
          $scope.fullname = fullname;
        });
      },
      draggable: function() {
        $modal.open({
          windowTemplateUrl: 'scripts/controllers/templates/bootstrap-ui/modals/draggable-window-template.html',
          templateUrl: 'scripts/controllers/templates/bootstrap-ui/modals/draggable.html',
          controller: 'BootstrapUiDraggableModalCtrl',
          keyboard: false,
          backdrop: 'static'
        });
      }

    };


    $scope.calendar = {
      format: 'MMMM dd, yyyy',
      options: {
        formatYear: 'yyyy',
        startingDay: 1,
        showWeeks: false,
        showButtonBar: false
      },
      open: function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.calendar.opened = true;
      }
    };

    $scope.time = {
      menuClick: function(event) {
        event.preventDefault();
      }
    };


    $scope.tabs = {
      tabset01: [{
        title: 'Dynamic Title 1',
        content: 'Dynamic content 1'
      }, {
        title: 'Dynamic Title 2',
        content: 'Dynamic content 2',
        disabled: true
      }],
      tabset02: [{
        title: 'Dynamic Title X',
        content: 'Dynamic content X'
      }, {
        title: 'Dynamic Title Y',
        content: 'Dynamic content Y',
        disabled: true
      }],
      tabset03: [{
        title: 'Dynamic Title A',
        content: 'Dynamic content A'
      }, {
        title: 'Dynamic Title B',
        content: 'Dynamic content B',
        disabled: true
      }],
      alert: function(event) {
        $timeout(function() {
          $window.alert('You\'ve selected the alert tab!');
        });
      }
    };



  });