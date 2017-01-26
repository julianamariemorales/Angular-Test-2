var anghttp3 = angular.module('anghttp3', []);

anghttp3.controller ('MainController', function($scope, $http ){
  var onUserComplete = function(response){
    $scope.user = response.data;
    $http.get($scope.user.repos_url)
      .then(onRepos, onErr);

    $scope.success = "Successfully got user from Github!";
    $scope.message = "alert alert-success";
    //console.log("successfully got user");
  };

  var onRepos =function(response){
    $scope.repos = response.data;
  };

  var onErr = function(whathappened){
    $scope.error = "Could not get user data";
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
