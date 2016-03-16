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
        })
      }

      // console.log($scope.auth)

      getProjects();

      var vm = this;
      vm.mydata = [];
      $scope.auth = auth;
      console.log($scope.auth.isAuthenticated)
      vm.profile = JSON.parse(localStorage.getItem('profile'));

      vm.checkUser = function() {
        if (vm.profile.email === 'bwalker1801@gmail.com'){
          return true;
          console.log('hell yeah you are logged in');
        }
      }
      //
      // // vm.checkUser();
      //
      // console.log(vm.checkUser());

      }
    }());
