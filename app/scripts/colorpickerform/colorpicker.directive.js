'use strict';

angular.module('angularCustomComponentsTalkApp')
    .directive('colorPicker', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elem, attrs, ngModelCtrl) {
                $(elem).colorpicker();

                elem.bind('change', function () {
                    console.log('input changed!');
                });
            }
        }
    });
