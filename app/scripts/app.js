'use strict';

/**
 * @ngdoc overview
 * @name angularCustomComponentsTalkApp
 * @description
 * # angularCustomComponentsTalkApp
 *
 * Main module of the application.
 */
angular
    .module('angularCustomComponentsTalkApp', [
        'ngAria',
        'ngRoute',
        'ngSanitize'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/colorpicker', {
                templateUrl: 'scripts/colorpickerform/colorpickerForm.html',
                controller: 'ColorPickerFormCtrl',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
