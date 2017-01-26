var anghttp = angular.module('anghttp', []);

anghttp.controller ('MainController', function($scope, $http ){
  var onUserComplete = function(response){
    $scope.user = response.data;
    //console.log("successfully got user");
  };

  var onErr = function(whathappened){
    $scope.error = "Could not get user";
  };

  //from https://docs.angularjs.org/api/ng/service/$http
  //$http.get ("https://api.github.com/users/julianamariemorales")
  $http.get ("https://api.github.com/users/julianamariemorales")

        .then(onUserComplete,onErr);


});
