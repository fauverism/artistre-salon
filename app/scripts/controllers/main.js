'use strict';

/**
 * @ngdoc function
 * @name artApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the artApp
 */
angular.module('artApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $('ul.navbar-nav li a').on('click', function() {
      console.log('clicked the navbar a one');
      $('.navbar-collapse').removeClass('in');
    });

  });
