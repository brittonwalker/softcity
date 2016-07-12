"use strict";

(function() {
    angular
        .module("softCity")
        .controller("aboutController", [
            '$scope',
            '$timeout',
            'greenBar',
            AboutControllerFunction
        ]);

    function AboutControllerFunction($scope, $timeout, greenBar) {
      greenBar.helloWorld();
        console.log('hey from the about controller');
        $scope.$on('$viewContentLoading', function(event) {
                greenBar.helloWorld();
        });


    }
}());
