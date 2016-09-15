"use strict";

(function() {
    angular
      .module("softCity")
      .controller("showController", [
        '$scope',
        '$http',
        '$stateParams',
        'auth',
        '$timeout',
        'greenBar',
        ShowControllerFunction
      ]);

    function ShowControllerFunction($scope, $http, $stateParams, auth, $timeout, greenBar) {

      var id = $stateParams.id;
      $scope.url = 'https://soft-city.herokuapp.com/api/projects/' + id;

      var vm = this;
      vm.mydata = {};

      var getProject = function() {
        $http.get($scope.url)
        .then(function(res) {
          greenBar.helloWorld();
          $timeout(function(){
            vm.mydata = res.data;
            greenBar.goodbyeWorld();
            console.log('from show controller');
          }, 500);

        });
      };

      getProject();

      $scope.auth = auth;

      $scope.updateProject = function() {
        $http({
            method: 'PUT',
            url: $scope.url,
            data: $.param(vm.mydata),
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
          .success(function(data) {
            console.log(data);
            getProject();
          });
      };

      $scope.removeField = function(){
        vm.mydata.img.pop();
      };

      $scope.addField = function(){
        vm.mydata.img.push('');
      };

      }
    }());
