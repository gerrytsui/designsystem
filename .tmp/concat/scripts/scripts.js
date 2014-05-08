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
  'angular-flot'
]).config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'IndexCtrl',
      className: 'main',
      pageTitle: 'Home'
    }).when('/leftnav', {
      templateUrl: 'views/leftnav.html',
      controller: 'LeftnavCtrl',
      className: 'leftnav',
      pageTitle: 'Left Nav'
    }).when('/two_panel_selector', {
      templateUrl: 'views/two_panel_selector.html',
      controller: 'TwoPanelSelectorCtrl',
      className: 'leftPanel',
      pageTitle: 'Two Panel Selector'
    }).when('/temp', {
      templateUrl: 'views/temp.html',
      controller: 'TempCtrl',
      className: 'temp',
      pageTitle: 'Temp'
    }).when('/elements', {
      templateUrl: 'views/elements.html',
      controller: 'ElementsCtrl',
      className: 'elements',
      pageTitle: 'Elements'
    }).when('/data_grid', {
      templateUrl: 'views/data_grid.html',
      controller: 'DataGridCtrl',
      className: 'datagrid',
      pageTitle: 'Data Grid'
    }).when('/maps', {
      templateUrl: 'views/maps.html',
      controller: 'MapsCtrl',
      className: 'maps',
      pageTitle: 'Maps'
    }).when('/faceted_search', {
      templateUrl: 'views/faceted_search.html',
      controller: 'FacetedSearchCtrl',
      className: 'search',
      pageTitle: 'Faceted Search'
    }).when('/headers', {
      templateUrl: 'views/headers.html',
      controller: 'HeadersCtrl',
      className: 'headers',
      pageTitle: 'Headers'
    }).when('/accordion', {
      templateUrl: 'views/accordion.html',
      controller: 'AccordionDemoCtrl',
      className: 'accordion',
      pageTitle: 'Accordion'
    }).when('/panels', {
      templateUrl: 'views/panels.html',
      controller: 'PanelsCtrl',
      className: 'panels',
      pageTitle: 'Panels'
    }).when('/forms', {
      templateUrl: 'views/forms.html',
      controller: 'FormsCtrl',
      className: 'forms',
      pageTitle: 'Forms'
    }).otherwise({ redirectTo: '/' });
  }
]);
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
'use strict';
angular.module('designSystemApp').factory('ChartFactory', [
  '$http',
  function ($http) {
    return {
      getChartData: function () {
        var chartData = $http.get('scripts/data/flot_example_data.js').then(function (response) {
            return response.data;
          });
        return chartData;
      }
    };
  }
]);
'use strict';
angular.module('designSystemApp').factory('PeopleFactory', [
  '$http',
  function ($http) {
    var peopleData;
    return {
      getPeople: function () {
        if (!peopleData) {
          peopleData = $http.get('scripts/data/people_data.js').then(function (response) {
            return response.data;
          });
        }
        return peopleData;
      }
    };
  }
]);
'use strict';
angular.module('designSystemApp').factory('InvoiceFactory', [
  '$http',
  function ($http) {
    return {
      getInvoice: function (limit) {
        var invoiceData = $http.get('scripts/data/invoice_data.js').then(function (response) {
            var d = response.data;
            if (limit) {
              d = d.data.slice(0, limit);
            }
            return d;
          });
        return invoiceData;
      }
    };
  }
]);
'use strict';
angular.module('designSystemApp').factory('FaIconFactory', [
  '$http',
  function ($http) {
    return {
      getIcons: function () {
        var icons = $http.get('scripts/data/fa_icons.js').then(function (response) {
            return response.data.icons;
          });
        return icons;
      }
    };
  }
]);
'use strict';
angular.module('designSystemApp').factory('FakeNavFactory', function () {
  var fakenav = [
      {
        label: 'Menu Item',
        value: '#',
        toggle: 'dropdown',
        children: [
          {
            label: 'Home',
            value: 'home'
          },
          {
            label: 'Left Nav',
            value: 'leftnav'
          },
          {
            label: 'Two-Panel Selector',
            value: 'two_panel_selector'
          },
          {
            label: 'Maps',
            value: 'maps'
          }
        ]
      },
      {
        label: 'Menu Item No Children',
        value: 'home',
        toggle: ''
      },
      {
        label: 'Another Item',
        value: '#',
        toggle: 'dropdown',
        children: [
          {
            label: 'Text',
            value: 'elements?section=Text'
          },
          {
            label: 'Buttons',
            value: 'elements?section=Buttons'
          },
          {
            label: 'Alerts',
            value: 'elements?section=Alerts'
          },
          {
            label: 'Inputs',
            value: 'elements?section=Inputs'
          },
          {
            label: 'Icons',
            value: 'elements?section=Icons'
          }
        ]
      }
    ];
  return {
    getFakeNavData: function () {
      return fakenav;
    }
  };
});
'use strict';
angular.module('designSystemApp').factory('NavFactory', [
  '$http',
  function ($http) {
    return {
      getNav: function () {
        var navData = $http.get('scripts/data/nav_data.js').then(function (response) {
            return response.data;
          });
        return navData;
      },
      getSubNav: function (subnav) {
        var $subnav = this.getNav().then(function (data) {
            var subnavData;
            angular.forEach(data.nav, function (v, k) {
              if (angular.lowercase(v.label) === angular.lowercase(subnav)) {
                subnavData = v;
              }
            });
            return subnavData;
          });
        return $subnav;
      }
    };
  }
]);
'use strict';
angular.module('designSystemApp').directive('bsPopover', function () {
  return {
    link: function postLink(scope, element, attrs) {
      var $content = $('#' + attrs.contentId);
      element.popover({
        trigger: 'click',
        placement: 'bottom',
        html: true,
        container: 'body',
        content: function () {
          return $content.removeClass('hidden');
        }
      });
      element.on('show.bs.popover', function () {
        $('[bs-popover]').popover('hide');
      });
      element.on('shown.bs.popover', function () {
        $('#' + attrs.contentId).find('input:first').focus();
      });
    }
  };
});
'use strict';
angular.module('designSystemApp').directive('menu', [
  '$timeout',
  function ($timeout) {
    return {
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        var $body = $('body'), $menu = element, $menuCollapse = $menu.find('.menu-collapse i.fa'), $menuHeading = $menu.find('.menu-heading'), $menuTitle = $menuHeading.find('.menu-title');
        if ($body.hasClass('minified')) {
          $menuTitle.addClass('hide');
        }
        function hideSubmenus() {
          $menuTitle.fadeOut('400', function () {
            $menuTitle.addClass('hide');
            $body.toggleClass('minified');
          });
        }
        $menuCollapse.on({
          click: function (e) {
            if ($body.hasClass('minified')) {
              $body.toggleClass('minified');
              $menuTitle.removeClass('hide').fadeIn(400);
            } else {
              var $menuOpen = $menu.find('li.open'), $menuOpenContent = $menuOpen.find('ul.menu-content');
              if ($menuOpen.length > 0) {
                $menuOpenContent.slideToggle('fast', hideSubmenus());
                $menuOpen.removeClass('open');
              } else {
                hideSubmenus();
              }
            }
          }
        });
        $menuHeading.on({
          click: function (e) {
            //if minified and there is a submenu, prevent the click event
            if ($body.hasClass('minified') && $(this).parent().find('ul.menu-content').length > 0) {
              return false;
            }
            ;
            if (!$body.hasClass('minified')) {
              var $parent = $(this).parent(), $children = $parent.children('ul.menu-content'), $siblings = $parent.siblings();
              $children.slideToggle(400);
              $parent.toggleClass('open');
              $siblings.removeClass('open').children('ul.menu-content').slideUp(400);
            }
          }
        });
      }
    };
  }
]);
'use strict';
angular.module('designSystemApp').directive('fixednav', function () {
  return {
    restrict: 'AE',
    link: function postLink(scope, element, attrs) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
          element.addClass('shadow');
        } else {
          element.removeClass('shadow');
        }
      });
    }
  };
});
'use strict';
angular.module('designSystemApp').directive('treenav', function () {
  return {
    restrict: 'A',
    link: function postLink(scope, element, attrs) {
      var $body = $('body'), $menuCollapse = element.find('.menu-collapse'), $treeToggler = element.find('span.tree-toggler'), expanded = true;
      $treeToggler.on({
        click: function (e) {
          if (!$body.hasClass('minified')) {
            var $parent = $(this).parent(), $childrenTree = $parent.children('ul.tree'), $siblings = $parent.siblings();
            $parent.children('ul.tree').toggle(400);
            $parent.toggleClass('open');
            $siblings.removeClass('open');
            $siblings.children('ul.tree').hide('400');
          }
        }
      });
      $menuCollapse.on({
        click: function (e) {
          closeAllMenus();
          if (expanded) {
            $('.menu-title').fadeOut('400', function () {
              $body.toggleClass('minified');
            });
            expanded = false;
          } else {
            $body.toggleClass('minified');
            setTimeout(function () {
              $('.menu-title').fadeIn('400');
            }, 300);
            expanded = true;
          }
        }
      });
      function closeAllMenus() {
        $treeToggler.each(function () {
          var $parent = $(this).parent();
          $parent.siblings().removeClass('open');
          $parent.children('ul.tree').hide('400');
        });
      }
    }
  };
});
'use strict';
angular.module('designSystemApp').directive('collapse', function () {
  return {
    restrict: 'A',
    link: function postLink(scope, element, attrs) {
      element.on({
        click: function (e) {
          element.toggleClass('open');
        }
      });
    }
  };
});
// Requires jQuery from http://jquery.com/
// and jQuerySparklines from http://omnipotent.net/jquery.sparkline
// AngularJS directives for jquery sparkline
angular.module('sparkline', []);
angular.module('sparkline').directive('jqSparkline', [function () {
    'use strict';
    return {
      restrict: 'A',
      require: '?ngModel',
      scope: {
        options: '=',
        data: '='
      },
      link: function (scope, elem, attrs) {
        //scope.data = scope.data || [10, 10, 10];
        var options = { type: 'line' };
        scope.options = angular.extend(options, scope.options);
        elem.sparkline(scope.data, options);  /*
		  scope.$watch('data', function(newVal, oldVal) {
			console.log(newVal, oldVal);
		  });
		  */
      }
    };
  }]);
'use strict';
angular.module('ngFilters', []).filter('capitalize', function () {
  return function (input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
  };
});
'use strict';
angular.module('designSystemApp').controller('MainCtrl', [
  '$scope',
  'NavFactory',
  '$route',
  '$location',
  function ($scope, NavFactory, $route, $location) {
    NavFactory.getNav().then(function (data) {
      $scope.navData = data.nav;
      $scope.predicate = 'label';
    });
    $scope.$on('$routeChangeSuccess', function (newVal, oldVal) {
      if (oldVal !== newVal) {
        $scope.routeClassName = $route.current.className;
        $scope.pgTitle = $route.current.pageTitle;  //console.log('page title is:' + $scope.pgTitle);
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
      show: function () {
        $scope.settings.isOpen = $scope.settings.isOpen ? false : true;
      }
    };
  }
]);
'use strict';
angular.module('designSystemApp').controller('IndexCtrl', [
  '$scope',
  '$interval',
  'ChartFactory',
  'PeopleFactory',
  function ($scope, $interval, ChartFactory, PeopleFactory) {
    $scope.switchStatus = { isOn: false };
    var pieInterval;
    $scope.$watch('switchStatus.isOn', function (newVal, oldVal) {
      if (newVal) {
        pieInterval = $interval(function () {
          $scope.sample.percent = (Math.random() * 100).toFixed(0);
          $scope.sample2.percent = (Math.random() * 100).toFixed(0);
          $scope.sample3.percent = (Math.random() * 100).toFixed(0);
        }, 3000);
      } else {
        $interval.cancel(pieInterval);
      }
    });
    $scope.testValidate = function () {
      $.each($scope.test.$error.required, function () {
        this.$dirty = true;
      });
    };
    $scope.nameValidate = function () {
      $.each($scope.name.$error.required, function () {
        this.$dirty = true;
      });
    };
    //flot
    $scope.flot = {
      series: [],
      options: {
        series: {
          lines: {
            show: true,
            fill: true
          },
          points: { show: false }
        },
        grid: {
          borderWidth: 1,
          minBorderMargin: 0,
          labelMargin: 10,
          margin: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          },
          hoverable: true
        },
        legend: {
          show: true,
          noColumns: 3,
          margin: 10
        },
        xaxis: { font: { color: '#fff' } },
        colors: [
          '#D0E1E7',
          '#71A6B9',
          '#215262'
        ],
        tooltip: true,
        tooltipOpts: {
          content: '%s: %y on %x',
          onHover: function (flotItem, $tooltipEl) {
            $tooltipEl.css({
              'background': '#333',
              'color': '#fff',
              'border': 'none'
            });
          }
        }
      }
    };
    //end flot
    PeopleFactory.getPeople().then(function (response) {
      $scope.tabledata = response.data;
    });
    ChartFactory.getChartData().then(function (response) {
      $scope.flot.series = response.data;
    });
    $scope.colors = [
      '#D0E1E7',
      '#71A6B9',
      '#215262'
    ];
    $scope.sparkline = {
      options: {
        type: 'bar',
        height: '50px',
        barColor: '#71A6B9',
        barWidth: 6,
        barSpacing: 2,
        chartRangeMin: 0,
        chartRangeMax: 100,
        highlightColor: '#D0E1E7',
        tooltipFormat: '<span>{{value}}</span>'
      },
      data: [
        100,
        90,
        80,
        70,
        80,
        60,
        60,
        80,
        85,
        90,
        70,
        80
      ]
    };
    $scope.sparkline2 = {
      options: {
        type: 'line',
        width: '100px',
        height: '50px',
        chartRangeMin: 0,
        chartRangeMax: 100,
        highlightColor: '#D0E1E7',
        lineWidth: '2',
        spotRadius: 0,
        lineColor: '#71A6B9',
        fillColor: '#D0E1E7',
        highlightLineColor: '#215262',
        tooltipFormat: '<span>{{y}}</span>'
      },
      data: [
        100,
        90,
        80,
        70,
        80,
        60,
        60,
        80,
        85,
        90,
        70,
        80
      ]
    };
    $scope.sparkline3 = {
      options: {
        type: 'pie',
        height: '50px',
        chartRangeMin: 0,
        chartRangeMax: 100,
        sliceColors: [
          '#D0E1E7',
          '#71A6B9',
          '#215262'
        ],
        highlightLighten: 0.8,
        tooltipFormat: '<span>{{value}}</span>'
      },
      data: [
        33,
        33,
        33
      ]
    };
    $scope.piesize = '85';
    $scope.sample = {
      options: {
        animate: {
          duration: 1000,
          enabled: true
        },
        size: $scope.piesize,
        barColor: $scope.colors[2],
        scaleColor: false,
        lineWidth: 15,
        lineCap: 'circle',
        trackColor: '#f2f2f2'
      },
      percent: 65
    };
    $scope.sample2 = {
      options: {
        animate: {
          duration: 1000,
          enabled: true
        },
        size: $scope.piesize,
        barColor: $scope.colors[0],
        scaleColor: false,
        lineWidth: 15,
        lineCap: 'circle',
        trackColor: '#f2f2f2'
      },
      percent: 25
    };
    $scope.sample3 = {
      options: {
        animate: {
          duration: 1000,
          enabled: true
        },
        size: $scope.piesize,
        barColor: $scope.colors[1],
        scaleColor: false,
        lineWidth: 15,
        lineCap: 'circle',
        trackColor: '#f2f2f2'
      },
      percent: 90
    };
  }
]);
'use strict';
angular.module('designSystemApp').controller('LeftnavCtrl', [
  '$scope',
  'PeopleFactory',
  function ($scope, PeopleFactory) {
    PeopleFactory.getPeople().then(function (response) {
      $scope.tabledata = response.data;
    });
  }
]);
'use strict';
angular.module('designSystemApp').controller('TwoPanelSelectorCtrl', [
  '$scope',
  function ($scope) {
  }
]);
'use strict';
angular.module('designSystemApp').controller('ElementsCtrl', [
  '$scope',
  '$route',
  '$location',
  '$timeout',
  '$log',
  'NavFactory',
  'FaIconFactory',
  'PeopleFactory',
  'ngProgress',
  function ($scope, $route, $location, $timeout, $log, NavFactory, FaIconFactory, PeopleFactory, ngProgress) {
    //get the subnav data
    NavFactory.getSubNav('elements').then(function (data) {
      $scope.subnav = data;
    });
    // hilight the correct subnav item from the route param
    $scope.submenu = $route.current.params.section;
    // submenu item click
    $scope.select = function (submenu) {
      $scope.submenu = submenu;
      $location.path('#/elements?section=' + submenu);
    };
    // get fontawesome icon data
    FaIconFactory.getIcons().then(function (data) {
      $scope.icons = data;
    });
    // get the people data
    PeopleFactory.getPeople().then(function (response) {
      $scope.peopleData = response.data;
    });
    // show the ngProgress bar
    $scope.startProgress = function ($event) {
      $event.preventDefault();
      ngProgress.start();
      $timeout(function () {
        ngProgress.complete();
        $scope.show = true;
      }, 1000);
    };
  }
]);
'use strict';
angular.module('designSystemApp').controller('DataGridCtrl', [
  '$scope',
  'InvoiceFactory',
  function ($scope, InvoiceFactory) {
    $scope.pricingLength = [
      5,
      10,
      15,
      20,
      25
    ];
    $scope.pricingLengthSelected = $scope.pricingLength[0];
    // get the invoice data
    InvoiceFactory.getInvoice($scope.pricingLengthSelected).then(function (response) {
      $scope.pricingdata = response;
      $scope.totalItems = $scope.pricingdata.length;
    });
    // length dropdown change
    $scope.pricingLengthChange = function () {
      InvoiceFactory.getInvoice($scope.pricingLengthSelected).then(function (response) {
        $scope.pricingdata = response;
      });
    };
    // calculate the total for each row
    $scope.total = function (index) {
      var expenses = $scope.pricingdata[index].expenses.slice(0, 4), total = 0;
      $.each(expenses, function (i, v) {
        total = total + parseFloat(v.balance.replace(',', ''));
      });
      return total.toFixed(2);
    };
    $scope.itemSelected = {
      isChecked: [],
      showAdd: false,
      showEdit: true,
      showDelete: true,
      deleteTooltip: 'Delete Record'
    };
    $scope.buttonHandler = function () {
      if ($scope.itemSelected.isChecked.length === 1) {
        $scope.itemSelected.showAdd = true;
        $scope.itemSelected.showEdit = false;
        $scope.itemSelected.showDelete = false;
        $scope.itemSelected.deleteTooltip = 'Delete Record';
      } else if ($scope.itemSelected.isChecked.length > 1) {
        $scope.itemSelected.showAdd = true;
        $scope.itemSelected.showEdit = true;
        $scope.itemSelected.showDelete = false;
        $scope.itemSelected.deleteTooltip = 'Delete Records';
      } else {
        $scope.itemSelected.showAdd = false;
        $scope.itemSelected.showEdit = true;
        $scope.itemSelected.showDelete = true;
        $scope.itemSelected.deleteTooltip = 'Delete Record';
      }
    };
    $scope.itemHandler = function (list) {
      $scope.itemSelected.isChecked.length = [];
      angular.forEach(list, function (item) {
        if (angular.isDefined(item.selected) && item.selected === true) {
          $scope.itemSelected.isChecked.push(item);
        }
      });
      $scope.buttonHandler();
    };
    $scope.selectAllHandler = function (event) {
      //console.log($scope.itemSelected.isChecked.length);
      $scope.itemSelected.isChecked.length = [];
      if ($scope.selectAll === true) {
        angular.forEach($scope.pricingdata, function (item) {
          item.selected = true;
        });
        $scope.itemSelected.showAdd = true;
        $scope.itemSelected.showEdit = true;
        $scope.itemSelected.showDelete = false;
        $scope.itemSelected.deleteTooltip = 'Delete Records';
      } else {
        angular.forEach($scope.pricingdata, function (item) {
          item.selected = false;
        });
        $scope.itemSelected.showAdd = false;
        $scope.itemSelected.showEdit = true;
        $scope.itemSelected.showDelete = true;
        $scope.itemSelected.deleteTooltip = 'Delete Record';
      }
    };
    $scope.selectRow = function (index, item) {
      //console.log(item);
      if ($scope.pricingdata[index].selected === true) {
        $scope.pricingdata[index].selected = false;
        var i = $scope.itemSelected.isChecked.indexOf(item);
        $scope.itemSelected.isChecked.splice(i, 1);
      } else {
        $scope.pricingdata[index].selected = true;
        $scope.itemSelected.isChecked.push(item);
      }
      $scope.buttonHandler();
    };
    // $scope.totalItems = 100;
    $scope.currentPage = 1;
    $scope.maxSize = $scope.pricingLengthSelected;
    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
  }
]);
'use strict';
angular.module('designSystemApp').controller('MapsCtrl', [
  '$scope',
  function ($scope) {
    $scope.leaflet = {
      center: {
        lat: 41.0374559,
        lng: -73.5395857,
        zoom: 15
      },
      defaults: {},
      markerSelected: 0,
      markers: {
        whq: {
          lat: 41.0374559,
          lng: -73.5395857,
          message: 'World Headquarters',
          focus: true,
          draggable: false
        },
        danbury: {
          lat: 41.415743,
          lng: -73.419252,
          message: 'Danbury',
          focus: false,
          draggable: false
        },
        troy: {
          lat: 42.6826591,
          lng: -73.7051468,
          message: 'Troy',
          focus: false,
          draggable: false
        },
        lanham: {
          lat: 38.9504623,
          lng: -76.8369675,
          message: 'Lanham',
          focus: false,
          draggable: false
        }
      },
      changeLocation: function (location) {
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
'use strict';
angular.module('designSystemApp').controller('FacetedSearchCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $scope.products = [
      {
        name: 'Product 1',
        hardware: true,
        software: true
      },
      {
        name: 'Product 2',
        hardware: false,
        software: false
      },
      {
        name: 'Product 3',
        hardware: true,
        software: false
      },
      {
        name: 'Product 1',
        hardware: true,
        software: false
      }
    ];
    $scope.layout = 'list';
    $scope.search = {};
    $scope.facet = { visible: false };
    $scope.facet.clearAll = function () {
      $scope.search = {};
    };
    $scope.facet.clearSearch = function () {
      var isVisible = false;
      if (!angular.equals({}, $scope.search)) {
        isVisible = true;
      }
      return isVisible;
    };
  }
]).filter('count', function () {
  return function (obj, string) {
    var count = 0;
    angular.forEach(obj, function (o) {
      if (o[string] === true) {
        count++;
      }
    });
    return count;
  };
});
'use strict';
angular.module('designSystemApp').controller('HeadersCtrl', [
  '$scope',
  'FakeNavFactory',
  function ($scope, FakeNavFactory) {
    $scope.fakeNavData = FakeNavFactory.getFakeNavData();
  }
]);
'use strict';
angular.module('designSystemApp').controller('AccordionDemoCtrl', [
  '$scope',
  function ($scope) {
    $scope.oneAtATime = true;
    $scope.groups = [
      {
        title: 'Dynamic Group Header - 1',
        content: 'Dynamic Group Body - 1'
      },
      {
        title: 'Dynamic Group Header - 2',
        content: 'Dynamic Group Body - 2'
      }
    ];
    $scope.items = [
      'Item 1',
      'Item 2',
      'Item 3'
    ];
    $scope.addItem = function () {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };
  }
]);
angular.module('designSystemApp').controller('TabsDemoCtrl', [
  '$scope',
  function ($scope) {
    $scope.tabs = [
      {
        title: 'Dynamic Title 1',
        content: 'Dynamic content 1'
      },
      {
        title: 'Dynamic Title 2',
        content: 'Dynamic content 2',
        disabled: true
      }
    ];
    $scope.alertMe = function () {
      setTimeout(function () {
        alert('You\'ve selected the alert tab!');
      });
    };
    $scope.navType = 'pills';
  }
]);
'use strict';
angular.module('designSystemApp');
var ModalDemoCtrl = function ($scope, $modal, $log) {
  $scope.items = [
    'item1',
    'item2',
    'item3'
  ];
  $scope.open = function () {
    var modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
        controller: ModalInstanceCtrl,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
};
// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.
var ModalInstanceCtrl = function ($scope, $modalInstance, items) {
  $scope.items = items;
  $scope.selected = { item: $scope.items[0] };
  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};
'use strict';
angular.module('designSystemApp').controller('PanelsCtrl', [
  '$scope',
  'PeopleFactory',
  function ($scope, PeopleFactory) {
    // get the people data
    PeopleFactory.getPeople().then(function (response) {
      $scope.peopleData = response.data;
    });
  }
]);
'use strict';
angular.module('designSystemApp').controller('FormsCtrl', [
  '$scope',
  'PeopleFactory',
  function ($scope, PeopleFactory) {
    // get the people data
    PeopleFactory.getPeople().then(function (response) {
      $scope.peopleData = response.data;
    });
  }
]);