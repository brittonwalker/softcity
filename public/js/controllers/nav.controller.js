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

      // $scope.moveBar = function(){
      //   $('.links').click(function(){
      //     $('.green').width('100px');
      //     console.log('hey ur in the green bar');
      //   });
      // };

      }
    }());
