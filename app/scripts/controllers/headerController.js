'use strict';

/**
 * @ngdoc function
 * @name artApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the artApp
 */
angular.module('artApp').
  controller('headerController', function($scope, $document){
    var section3 = angular.element(document.getElementById('section-3'));
    $scope.toSection3 = function() {
      $document.scrollToElementAnimated(section3);
    };
  }
).value('duScrollOffset', 60);
