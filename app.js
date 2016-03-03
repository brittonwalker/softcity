"use strict";

(function() {
  angular
  .module('softCity', [
    'ui.router'
  ])
  .config([
    "$stateProvider",
    "$urlRouterProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'partial.home.html'
        })

        .state('about', {
          url: '/about',
          templateUrl: 'partial-about.html'
        })
  };

})()
