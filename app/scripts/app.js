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
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    //$urlRouterProvider.otherwise("/appointments");
    $stateProvider
      .state('about', {
        url: "/about",
        views: {
          "hero": { templateUrl: "/views/partials/caro.html" },
          "content": { templateUrl: "/views/partials/about.html" }
        }
      })
      .state('hair-services', {
        url: "/hair-services",
        views: {
          "hero": { templateUrl: "/views/partials/hero.html" },
          "content": { templateUrl: "/views/partials/hair-services.html" }
        }
      })
      .state('spa-services', {
        url: "/spa-services",
        views: {
          "hero": { templateUrl: "/views/partials/hero.html" },
          "content": { templateUrl: "/views/partials/spa-services.html" }
        }
      })
      .state('appointments', {
        url: "/appointments",
        views: {
          "hero": { templateUrl: "/views/partials/hero.html" },
          "content": { templateUrl: "/views/partials/appointments.html" }
        }
      })
      .state('team', {
        url: "/team",
        views: {
          "hero": { templateUrl: "/views/partials/hero.html" },
          "content": { templateUrl: "/views/partials/team/team.html" }
        }
      })
      .state('social', {
        url: "/social",
        views: {
          "hero": { templateUrl: "/views/partials/hero.html" },
          "content": { templateUrl: "/views/partials/social.html" }
        }
      })
      .state('products', {
        url: "/products",
        views: {
          "hero": { templateUrl: "/views/partials/hero.html" },
          "content": { templateUrl: "/views/partials/products.html" }
        }
      })
      .state('menu', {
        url: "/menu",
        views: {
          "hero": { templateUrl: "/views/partials/hero.html" },
          "content": { templateUrl: "/views/partials/menu.html" }
        }
      })
    ;
    $locationProvider.html5Mode(true);
  });
