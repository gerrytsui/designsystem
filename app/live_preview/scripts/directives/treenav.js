'use strict';

angular.module('designSystemApp')
  .directive('treenav', function() {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

        var $body = $('body'),
          $menuCollapse = element.find('.menu-collapse'),
          $treeToggler = element.find('span.tree-toggler'),
          expanded = true;


        $treeToggler.on({
          click: function(e) {

            if (!$body.hasClass('minified')) {
              var $parent = $(this).parent(),
                $childrenTree = $parent.children('ul.tree'),
                $siblings = $parent.siblings();

              $parent.children('ul.tree').toggle(400);
              $parent.toggleClass('open');
              $siblings.removeClass('open');
              $siblings.children('ul.tree').hide('400');
            }

          }
        });


        $menuCollapse.on({
          click: function(e) {
            closeAllMenus();
            if (expanded) {
              $('.menu-title').fadeOut('400', function() {
                $body.toggleClass('minified');
              });

              expanded = false;
            }
            else {
              $body.toggleClass('minified');
              setTimeout(function() {
                $('.menu-title').fadeIn('400');
              }, 300);
              expanded = true;
            }
          }
        });

        function closeAllMenus() {
          $treeToggler.each(function() {

            var $parent = $(this).parent();

            $parent.siblings().removeClass('open');
            $parent.children('ul.tree').hide('400');
          });
        }




      }
    };
  });