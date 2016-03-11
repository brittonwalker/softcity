"use strict";

(function() {
    angular
      .module("softCity")
      .controller("introController", [
        '$timeout',
        '$location',
        IntroControllerFunction
      ]);

    function IntroControllerFunction($timeout, $location) {
      $timeout(function() {
             //will be directed to / after 3 seconds.
             $location.path('/projects');
          }, 5000);

      }
    }());
