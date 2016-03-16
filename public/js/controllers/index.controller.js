"use strict";

(function() {
    angular
      .module("softCity")
      .controller("indexController", [
        '$scope',
        '$http',
        '$stateParams',
        'auth',
        IndexControllerFunction
      ]);

    function IndexControllerFunction($scope, $http, $stateParams, auth) {

      var getProjects = function() {
        $http.get('http://localhost:8050/api/projects')
        .then(function(res) {
          vm.mydata = res.data;
          console.log(vm.mydata)
        })
      }

      getProjects();

      $scope.deleteProject = function(id) {
        $http.delete('http://localhost:8050/api/projects/' + id)
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
