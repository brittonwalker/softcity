!function(){"use strict";angular.module("softCity").directive("stickyNav",function(){return{restrict:"AC",scroll:$(window).scroll(function(){var n=!1;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(n=!0),$(this).scrollTop()>=10&&n===!1&&$("nav, .nav-container").addClass("fixie"),0===$(this).scrollTop()&&n===!1&&$("nav, .nav-container").removeClass("fixie")}),link:function(){$(".links").click(function(){$(".green").addClass("slide-out").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(".green").removeClass("slide-out")})}),$(window).resize(function(){})}}})}();