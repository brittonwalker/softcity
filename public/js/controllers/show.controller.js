"use strict";

(function() {
    angular
      .module("softCity")
      .controller("showController", [
        '$scope',
        '$http',
        '$stateParams',
        ShowControllerFunction
      ]);

    function ShowControllerFunction($scope, $http, $stateParams) {

      var id = $stateParams.id;
      $scope.url = 'http://localhost:8050/api/projects/' + id;

      var vm = this;
      vm.mydata = [];

      var getProject = function() {
        $http.get($scope.url)
        .then(function(res) {
          vm.mydata = res.data;
          console.log(vm.mydata);
        })
      };

      getProject();


      }
    }());
