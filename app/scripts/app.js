'use strict';

/**
 * @ngdoc overview
 * @name artApp
 * @description
 * # artApp
 *
 * Main module of the application.
 */
angular
  .module('artApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'duScroll'
  ]);
//   .value('$sniffer', { history: false })
//   .config(function ($locationProvider) {
//     $locationProvider.html5Mode(true).hashPrefix('!');
//   });
