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

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('intro', {
          url: '',
          templateUrl: '../views/partial.intro.html'
        })
        .state('contact', {
          url: '/contact',
          templateUrl: '../views/partial.contact.html'
        })

        .state('about', {
          url: '/about',
          templateUrl: '../views/partial-about.html'
        })
  };

})()
