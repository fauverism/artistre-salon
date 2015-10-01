'use strict';

/**
 * @ngdoc overview
 * @name artApp
 * @description
 * # artApp
 *
 * Main module of the application.
 */
angular.module('artApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router'
  ])
//   .value('$sniffer', { history: false })
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/appointments");
    $stateProvider
      .state('about', {
        url: "/about",
        templateUrl: "/views/partials/about.html"
      })
      .state('hair-services', {
        url: "/hair-services",
        templateUrl: "/views/partials/hair-services.html"
      })
      .state('spa-services', {
        url: "/spa-services",
        templateUrl: "/views/partials/spa-services.html"
      })
      .state('appointments', {
        url: "/appointments",
        templateUrl: "/views/partials/appointments.html"
      })
      .state('team', {
        url: "/team",
        templateUrl: "/views/partials/team/team.html"
      })
      .state('social', {
        url: "/social",
        templateUrl: "/views/partials/social.html"
      })
      .state('products', {
        url: "/products",
        templateUrl: "/views/partials/products.html"
      })
    ;
      //Appointments
      //Social
      //Team
      //Products
      //Contacts
  });
