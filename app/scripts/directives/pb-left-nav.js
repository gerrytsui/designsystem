'use strict';

angular.module('designSystemApp')
  .directive('pbLeftNav', function($timeout) {
    return {
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {

        var $body = $('body'),
          $menu = element,
          $menuCollapse = $menu.find('.menu-collapse i.fa'),
          $menuHeading = $menu.find('.menu-heading'),
          $menuTitle = $menuHeading.find('.menu-title'),
          $menuItems = $menu.find('.menu-content li a');

        if ($body.hasClass('minified')) {
          $menuTitle.addClass('hide');
        }

        function hideSubmenus() {
          $menuTitle.fadeOut('400', function() {
            $menuTitle.addClass('hide');
            $body.toggleClass('minified');
          });
        }

        $menuCollapse.on({
          click: function(e) {

            if ($body.hasClass('minified')) {
              $body.toggleClass('minified');
              $menuTitle.removeClass('hide').fadeIn(400);

            }
            else {
              var $menuOpen = $menu.find('li.open'),
                $menuOpenContent = $menuOpen.find('ul.menu-content');

              if ($menuOpen.length > 0) {
                $menuOpenContent.slideToggle('fast', hideSubmenus());
                $menuOpen.removeClass('open');
              }
              else {
                hideSubmenus();
              }
            }

          }
        });

        $menuHeading.on({
          click: function(e) {

            //if minified and there is a submenu, prevent the click event
            if ($body.hasClass('minified') && $(this).parent().find('ul.menu-content').length > 0) {
              return false;
            }

            if (!$body.hasClass('minified')) {
              var $parent = $(this).parent(),
                $children = $parent.children('ul.menu-content'),
                $siblings = $parent.siblings();

              $children.slideToggle(400);
              $parent.toggleClass('open');
              $siblings.removeClass('open').children('ul.menu-content').slideUp(400);
            }

          }
        });

        $menuItems.on({
          click: function(e) {
            $menuItems.removeClass('active');
            $(this).addClass('active');
          }
        });


      }
    };
  });