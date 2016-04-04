'use strict';

angular.module('angularCustomComponentsTalkApp')
    .controller('NavBarCtrl', function ($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    });
