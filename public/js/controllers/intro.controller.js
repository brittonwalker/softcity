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

      // var el = document.getElementByTagName('nav');
      // console.log(el);
      // console.log('hey mate');

      $timeout(function() {
             //will be directed to / after 3 seconds.
             $location.path('/projects');
          }, 5000);

      }
    }());
