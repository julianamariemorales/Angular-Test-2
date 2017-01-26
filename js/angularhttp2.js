var anghttp2 = angular.module('anghttp2', []);

anghttp2.controller ('MainController', function($scope, $http ){
  var onUserComplete = function(response){
    $scope.user = response.data;
    $scope.success = "Successfully got user from Github!";
    $scope.message = "alert alert-success";
    //console.log("successfully got user");
  };

  var onErr = function(whathappened){
    $scope.error = "Could not get user";
    $scope.message = "alert alert-danger";
  };

  $scope.search = function(username){
    $http.get ("https://api.github.com/users/" + username)
    .then(onUserComplete, onErr);
  };
  //from https://docs.angularjs.org/api/ng/service/$http
  //$http.get ("https://api.github.com/users/julianamariemorales")
  //$http.get ("https://api.github.com/users/angular")



});
