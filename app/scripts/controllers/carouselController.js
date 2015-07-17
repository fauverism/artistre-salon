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
        "Title": "Hair",
        "Summary": "Brunette",
        "image": "http://artistre-salon.com/images/hair-001.png"
      },
      {
        "ImageID": 2,
        "Title": "Hair",
        "Summary": "Blond",
        "image": "http://artistre-salon.com/images/hair-002.png"
      },
      {
        "ImageID": 3,
        "Title": "Hair",
        "Summary": "Redhead",
        "image": "http://artistre-salon.com/images/hair-003.png"
      },
      {
        "ImageID": 4,
        "Title": "Hair",
        "Summary": "Brunette",
        "image": "http://artistre-salon.com/images/hair-004.png"
      },
      {
        "ImageID": 5,
        "Title": "Hair",
        "Summary": "Brunette",
        "image": "http://artistre-salon.com/images/hair-005.png"
      }
    ];
  });
