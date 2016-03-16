(function() {

  'use strict';

  angular
    .module('softCity')
    .controller('newProjectController', [
      '$http',
      '$scope',
      '$state',
      formFunction
    ]);

  function formFunction($http, $scope, $state) {

    $scope.formData = {};
    $scope.url = 'http://localhost:8050/api/projects/';
    $scope.formData.img = [''];

    $scope.addField = function(){
      $scope.formData.img.push('');
      console.log('ur trying to add field')
      console.log($scope.formData);
    }

    $scope.submit = function(){
      console.log($scope.formData);
      $http({
          method: 'POST',
          url: $scope.url,
          data: $.param($scope.formData),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .success(function(data) {
          console.log('got it')
          $state.go('projects')
        })
    }


  }
})();
