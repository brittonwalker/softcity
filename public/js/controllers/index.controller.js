"use strict";

(function() {
    angular
      .module("softCity")
      .controller("indexController", [
        '$scope',
        '$http',
        '$stateParams',
        'auth',
        'greenBar',
        '$timeout',
        IndexControllerFunction
      ]);

    function IndexControllerFunction($scope, $http, $stateParams, auth, greenBar, $timeout) {

      var getProjects = function() {
        $http.get('https://soft-city.herokuapp.com/api/projects')
        .then(function(res) {
          greenBar.helloWorld();
          $timeout(function(){
            vm.mydata = res.data;
          }, 500)
        })
      }

      getProjects();

      $scope.deleteProject = function(id) {
        $http.delete('https://soft-city.herokuapp.com/api/projects/' + id)
        .then(function(res) {
          console.log(res);
          getProjects();
        });
      };

      var vm = this;
      vm.mydata = [];
      $scope.auth = auth;

      }
    }());
