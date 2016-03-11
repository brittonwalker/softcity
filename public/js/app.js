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
          url: '/',
          templateUrl: '../views/partial.intro.html',
          controller: 'introController'
        })

        .state('nada', {
          url: '',
          templateUrl: '../views/partial.intro.html',
          controller: 'introController'
        })

        .state('contact', {
          url: '/contact',
          templateUrl: '../views/partial.contact.html'
        })

        .state('about', {
          url: '/about',
          templateUrl: '../views/partial-about.html'
        })

        .state('projects', {
          url: '/projects',
          templateUrl: '../views/projects.index.html',
          controller: 'indexController',
          controllerAs: 'index'
        })

        .state('projectShow', {
          url: '/projects/:id',
          templateUrl: '../views/projects.show.html',
          controller: 'showController',
          controllerAs: 'show'
        })
  };

})()
