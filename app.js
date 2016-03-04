"use strict";

(function() {
  angular
  .module('softCity', [
    'ui.router',
    'ngAnimate'
  ])
  .config([
    "$stateProvider",
    "$urlRouterProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('contact', {
          url: '/contact',
          templateUrl: 'partial.contact.html'
        })

        .state('about', {
          url: '/about',
          templateUrl: 'partial-about.html'
        })
  };

})()
