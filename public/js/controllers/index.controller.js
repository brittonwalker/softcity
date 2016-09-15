"use strict";

(function() {
    angular
      .module("softCity")
      .controller("indexController", [
        '$rootScope',
        '$scope',
        '$http',
        '$stateParams',
        'auth',
        'greenBar',
        '$timeout',
        'ProjectService',
        IndexControllerFunction
      ]);

    function IndexControllerFunction($rootScope, $scope, $http, $stateParams, auth, greenBar, $timeout, ProjectService) {

      // ProjectService.getProjects();
      var getProjects = function() {
        $http.get('https://soft-city.herokuapp.com/api/projects')
        .then(function(res) {
          greenBar.helloWorld();
          $timeout(function(){
            vm.mydata = res.data;
            greenBar.goodbyeWorld();
            console.log('from index controller');
          }, 1000);
        })
      }

      getProjects();

      $scope.deleteProject = function(id) {
        $http.delete('https://soft-city.herokuapp.com/api/projects/' + id)
        .then(function(res) {
          getProjects();
        });
      };

      var vm = this;
      vm.mydata = [];
      $scope.auth = auth;

      }
    }());
