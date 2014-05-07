'use strict';

angular.module('designSystemApp')
  .factory('FakeNavFactory', function() {

    var fakenav = [{
      label: 'Menu Item',
      value: '#',
      toggle: 'dropdown', // set this to '' when the menu has no children
      children: [{
        label: 'Home',
        value: 'home'
      }, {
        label: 'Left Nav',
        value: 'leftnav'
      }, {
        label: 'Two-Panel Selector',
        value: 'two_panel_selector'
      }, {
        label: 'Maps',
        value: 'maps'
      }]
    }, {
      label: 'Menu Item No Children',
      value: 'home',
      toggle: ''
    }, {
      label: 'Another Item',
      value: '#',
      toggle: 'dropdown',
      children: [{
        label: 'Text',
        value: 'elements?section=Text'
      }, {
        label: 'Buttons',
        value: 'elements?section=Buttons'
      }, {
        label: 'Alerts',
        value: 'elements?section=Alerts'
      }, {
        label: 'Inputs',
        value: 'elements?section=Inputs'
      }, {
        label: 'Icons',
        value: 'elements?section=Icons'
      }]
    }];


    return {
      getFakeNavData: function() {
        return fakenav;
      }
    };


  });