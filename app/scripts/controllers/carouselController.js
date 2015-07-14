'use strict';

/**
 * @ngdoc function
 * @name artApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the artApp
 */
angular.module('artApp')
  .controller('CarouselCtrl', function ($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [
      {
        "ImageID": 1,
        "Title": "food",
        "Summary": "Something about food",
        "image": "http://lorempixel.com/1280/500/food/"
      },
      {
        "ImageID": 2,
        "Title": "sport",
        "Summary": "Something about sports",
        "image": "http://lorempixel.com/1280/500/sports/"
      },
      {
        "ImageID": 3,
        "Title": "food",
        "Summary": "Something about food",
        "image": "http://lorempixel.com/1280/500/food/"
      },
      {
        "ImageID": 4,
        "Title": "sport",
        "Summary": "Something about sports",
        "image": "http://lorempixel.com/1280/500/sports/"
      }
    ];
  });
