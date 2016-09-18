"use strict";

(function() {
  angular
  .module('softCity', [
    'ngMdIcons',
    'ui.router',
    'ngAnimate',
    'auth0',
    'angular-storage',
    'angular-jwt',
    'ngMaterial'
  ])
  .config([
    "$stateProvider",
    "$urlRouterProvider",
    "jwtInterceptorProvider",
    RouterFunction
  ])
  .config(function($provide, authProvider, $urlRouterProvider, $stateProvider, $httpProvider, jwtInterceptorProvider) {

      authProvider.init({
        domain: 'brittonwalker.auth0.com',
        clientID: 'pHfERddgPLyILDkJDiCm0GdSb1nMgdIJ',
        callbackURL : location.href
      });

    $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: '../views/home.tpl.html'
        })
        .state('profile', {
          url: '/profile',
          templateUrl: '../views/profile.tpl.html',
          controller: 'profileController as user'
        })
        .state('new-project', {
          url: '/new',
          templateUrl: '../views/new.project.form.html',
          controller: 'newProjectController'
        });

    jwtInterceptorProvider.tokenGetter = function(store) {
      return store.get('token');
  };

  $httpProvider.interceptors.push('jwtInterceptor');
  }).run(function($rootScope, $state, auth, store, jwtHelper) {

  $rootScope.$on('$locationChangeStart', function() {
    // Get the JWT that is saved in local storage
    // and if it is there, check whether it is expired.
    // If it isn't, set the user's auth state
    var token = store.get('token');
    if (token) {
      if (!jwtHelper.isTokenExpired(token)) {
        if (!auth.isAuthenticated) {
          auth.authenticate(store.get('profile'), token);
        }
      }
    }
    else {
      // Otherwise, redirect to the home route
      // $location.path('/home');
    }
  });


  });

  function RouterFunction($stateProvider, $urlRouterProvider, $scope){

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
          templateUrl: '../views/partial-about.html',
          controller: 'aboutController'
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
        });
  }

})();
