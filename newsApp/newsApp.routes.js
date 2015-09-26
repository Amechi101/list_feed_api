"use strict";


angular.module('newsFeedApp').config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'newsApp/components/home/home.html',
            controller  : 'HomeController',
            controllerAs: 'home'
        });
});