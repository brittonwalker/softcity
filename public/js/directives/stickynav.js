(function() {

    'use strict';

    angular
        .module('softCity')
        .directive('stickyNav', function() {
            return {
                restrict: 'AC',
                scroll: $(window).scroll(function() {
                    var isMobile = false;

                    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                      isMobile = true;
                    }

                    if($(this).scrollTop() >= 10 && isMobile === false){
                      $('nav, .nav-container' ).addClass('fixie');
                      // $('main').css({'padding-top' : '190px'});
                    }

                    if($(this).scrollTop() === 0 && isMobile === false){
                      $('nav, .nav-container' ).removeClass('fixie');
                      // $('main').css({'padding-top' : '70px'});
                    }
                }),
                link: function(){
                  $('.links').click(function(){
                    // $('.green').addClass('slide-out').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
                    // $('.green').removeClass('slide-out'); });
                  });
                }
            };
        });
})();
