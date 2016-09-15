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

    }
}());
