'use strict';

angular.module('artApp').
  controller('ShowImages', function($scope, InstagramAPI){
    $scope.layout = 'grid';
    $scope.data = {};
    $scope.pics = [];

    InstagramAPI.fetchPhotos(function(data){
      $scope.pics = data;
    });
  });
