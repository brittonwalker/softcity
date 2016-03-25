"use strict";

(function() {
    angular
      .module("softCity")
      .controller("showController", [
        '$scope',
        '$http',
        '$stateParams',
        'auth',
        ShowControllerFunction
      ]);

    function ShowControllerFunction($scope, $http, $stateParams, auth) {

      var id = $stateParams.id;
      $scope.url = 'http://localhost:8050/api/projects/' + id;

      var vm = this;
      // vm.mydata = {};

      var getProject = function() {
        $http.get($scope.url)
        .then(function(res) {
          vm.mydata = res.data;
        })
      };

      getProject();

      $scope.auth = auth;

      $scope.updateProject = function() {
        console.log(vm.mydata)
        $http({
            method: 'PUT',
            url: $scope.url,
            data: $.param(vm.mydata),
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
          .success(function(data) {
            console.log('got it')
          })
      };

      $scope.removeField = function(){
        vm.mydata.img.pop();
      }

      $scope.addField = function(){
        vm.mydata.img.push('');
      }

      }
    }());
