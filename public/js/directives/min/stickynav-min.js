!function(){"use strict";angular.module("softCity").directive("stickyNav",function(){return{restrict:"AC",link:$(window).scroll(function(){var i=!1;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(i=!0),$(this).scrollTop()>=50&&i===!1&&($("nav").addClass("fixie"),$("main").css({"padding-top":"100px"})),0===$(this).scrollTop()&&i===!1&&($("nav").removeClass("fixie"),$("main").css({"padding-top":"50px"}))})}})}();