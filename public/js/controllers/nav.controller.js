"use strict";

(function() {
    angular
      .module("softCity")
      .controller("navController", [
        '$state',
        '$scope',
        '$location',
        IntroControllerFunction
      ]);

    function IntroControllerFunction($state, $scope, $location) {

      $scope.currentPath = $location.path();

      $scope.$state = $state;

      $scope.moveBar = function(){
        $('.green').addClass('slide-out').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $('.green').removeClass('slide-out'); });
      };

      }
    }());
