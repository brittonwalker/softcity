"use strict";

(function() {
    angular
      .module("softCity")
      .controller("indexController", [
        '$scope',
        '$http',
        '$stateParams',
        IndexControllerFunction
      ]);

    function IndexControllerFunction($scope, $http, $stateParams) {

      var getProjects = function() {
        $http.get('http://localhost:8050/api/projects')
        .then(function(res) {
          vm.mydata = res.data;
          console.log(vm.mydata);
        })
      }

      getProjects();

      var vm = this;
      vm.mydata = [];

      }
    }());
