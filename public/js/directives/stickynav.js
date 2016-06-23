(function() {

    'use strict';

    angular
        .module('softCity')
        .directive('stickyNav', function() {
            return {
                restrict: 'AC',
                link: $(window).scroll(function() {
                    $('nav').addClass('fixie');
                    $('main').css({'padding-top' : '100px'});
                    if($(this).scrollTop() === 0){
                      $('nav').removeClass('fixie');
                      $('main').css({'padding-top' : '30px'});
                    }
                })
            };
        });
})();
