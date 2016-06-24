(function() {

    'use strict';

    angular
        .module('softCity')
        .directive('stickyNav', function() {
            return {
                restrict: 'AC',
                link: $(window).scroll(function() {
                    var isMobile = false;

                    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                      isMobile = true;
                    }

                    if($(this).scrollTop() >= 10 && isMobile === false){
                      $('nav').addClass('fixie');
                      $('main').css({'padding-top' : '190px'});
                    }

                    if($(this).scrollTop() === 0 && isMobile === false){
                      $('nav').removeClass('fixie');
                      $('main').css({'padding-top' : '70px'});
                    }
                })
            };
        });
})();
