'use strict';

angular.module('designSystemApp')
    .directive('treenav', function() {
        return {
            restrict: 'A',
            link: function postLink(scope, element, attrs) {

                var $body = $('body'),
                    $menuCollapseButton = element.find('#menu-collapse'),
                    $treeToggleButton = element.find('span.tree-toggler'),
                    expanded = true;


                $treeToggleButton.on({
                    click: function(e) {
                        //closeAllMenus();

                        if ($body.hasClass('minified')) {
                            $(this).children('ul').show();
                        }

                        $(this).parent().children('ul.tree').toggle(400);
                        $(this).parent().toggleClass('open');
                        $(this).parent().siblings().removeClass('open');
                        $(this).parent().siblings().children('ul.tree').hide('400');


                    }
                });


                $menuCollapseButton.on({
                    click: function(e) {
                        closeAllMenus();
                        if (expanded) {
                            $('.menu-title').fadeOut('400', function() {
                                $body.toggleClass('minified');
                            });

                            expanded = false;
                        } else {
                            $body.toggleClass('minified');
                            setTimeout(function() {
                                $('.menu-title').fadeIn('400');
                            }, 300);
                            expanded = true;
                        }
                    }
                });

                function closeAllMenus() {
                    $treeToggleButton.each(function() {
                        $(this).parent().siblings().removeClass('open');
                        $(this).parent().children('ul.tree').hide('400');
                    });
                }




            }
        };
    });