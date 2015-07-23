'use strict';

angular.module('artApp').
  factory("InstagramAPI", ['$http', function($http) {
    var client_id = '6ed187290b4f41e3b186d42dc052d39d';
    var user_id = '1007246610';
  return {
    fetchPhotos: function(callback){
      var endpoint = "https://api.instagram.com/v1/users/" + user_id + "/media/recent/?";
      endpoint += "?count=99";
      endpoint += "&client_id=" + client_id;
      endpoint += "&callback=JSON_CALLBACK";
      $http.jsonp(endpoint).success(function(response){
        callback(response.data);
      });
    }
  };
}]);
