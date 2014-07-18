'use strict';

angular.module('designSystemApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'ngFilters',
    'easypiechart',
    'sparkline',
    'leaflet-directive',
    'ngProgress',
    'toggle-switch',
    'angular-flot',
    'ui.select2',
    'toggle-switch',
    'kendo.directives',
    'ui-rangeSlider'

])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'IndexCtrl',
                className: 'main',
                pageTitle: 'Home'
            })
            .when('/leftnav', {
                templateUrl: 'views/leftnav.html',
                controller: 'LeftnavCtrl',
                className: 'leftnav',
                pageTitle: 'Left Nav',
                reloadOnSearch: false //prevent the controller reloading on route change
            })
            .when('/two_panel_selector', {
                templateUrl: 'views/two_panel_selector.html',
                controller: 'TwoPanelSelectorCtrl',
                className: 'leftPanel',
                pageTitle: 'Two Panel Selector'
            })
            .when('/temp', {
                templateUrl: 'views/temp.html',
                controller: 'TempCtrl',
                className: 'temp',
                pageTitle: 'Temp'

            })
            .when('/elements', {
                templateUrl: 'views/elements.html',
                controller: 'ElementsCtrl',
                className: 'elements',
                pageTitle: 'Elements'
            })
            .when('/data_grid', {
                templateUrl: 'views/data_grid.html',
                controller: 'DataGridCtrl',
                className: 'datagrid',
                pageTitle: 'Data Grid'
            })
            .when('/maps', {
                templateUrl: 'views/maps.html',
                controller: 'MapsCtrl',
                className: 'maps',
                pageTitle: 'Maps'
            })
            .when('/faceted_search', {
                templateUrl: 'views/faceted_search.html',
                controller: 'FacetedSearchCtrl',
                className: 'search',
                pageTitle: 'Faceted Search'
            })
            .when('/headers', {
                templateUrl: 'views/headers.html',
                controller: 'HeadersCtrl',
                className: 'headers',
                pageTitle: 'Headers'
            })
            .when('/accordion', {
                templateUrl: 'views/accordion.html',
                controller: 'AccordionDemoCtrl',
                className: 'accordion',
                pageTitle: 'Accordion'
            })
            .when('/panels', {
                templateUrl: 'views/panels.html',
                controller: 'PanelsCtrl',
                className: 'panels',
                pageTitle: 'Panels'
            })
            .when('/forms', {
                templateUrl: 'views/forms.html',
                controller: 'FormsCtrl',
                className: 'forms',
                pageTitle: 'Forms'
            })
            .when('/tabs', {
                templateUrl: 'views/tabs.html',
                controller: 'TabsDemoCtrl',
                className: 'tabs',
                pageTitle: 'Tabs'
            })
            .when('/gallery', {
                templateUrl: 'views/isotope-gallery.html',
                controller: 'IsotopeGalleryCtrl',
                className: 'gallery',
                pageTitle: 'Gallery'
            })
            .when('/kendo', {
                templateUrl: 'views/kendo.html',
                controller: 'KendoDemoCtrl',
                className: 'kendo',
                pageTitle: 'Kendo'
            })
            .otherwise({
                redirectTo: '/'
            });

    })
/*
//run ngProgress when the route changes (can be annoying since it is so fast)
.run(['$rootScope', 'ngProgress',
  function($rootScope, ngProgress) {
    // You can customize progress bar here.
    ngProgress.color('#418bc9');

    // When route started to change.
    $rootScope.$on('$routeChangeStart', function() {
      ngProgress.reset(); // Required to handle all edge cases.
      ngProgress.start();
    });

    // When route successfully changed.
    $rootScope.$on('$routeChangeSuccess', function() {
      ngProgress.complete();
    });

    // When some error occured.
    $rootScope.$on('$routeChangeError', function() {
      ngProgress.reset();
    });
  }
])*/
;