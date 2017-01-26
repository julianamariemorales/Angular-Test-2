var anghttp6 = angular.module('anghttp6', []);

anghttp6.controller ('MainController', function(
        $scope, $http, $interval, $log,
        $anchorScroll, $location){

  //onUserComplete
  var onUserComplete = function(response){
    $scope.user = response.data;
    $http.get($scope.user.repos_url)
      .then(onRepos, onErr);

    $scope.success = "Successfully got user from Github!";
    $scope.message = "alert alert-success";
  };

  //show repositories
  var onRepos =function(response){
    $scope.repos = response.data;

    //$anchorScroll([hash]); - The hash specifying the element to scroll to
    $location.hash("userRepos");
    $anchorScroll();
  };


  //error
  var onErr = function(whathappened){
    $scope.error = "Could not get user data";
    $scope.message = "alert alert-danger";
  };

  //start searcg
  $scope.search = function(username){
  $log.info("Searching for..." + username);
  $http.get ("https://api.github.com/users/" + username)
    .then(onUserComplete, onErr);
  };

  $scope.username =  "julianamariemorales";
  $scope.countdown = 5;

  //startCountdown();
  $scope.startCountdown = function() {
      $interval($scope.decrementCountDown, 1000,$scope.countdown);
    };
    $scope.decrementCountDown = function() {
      $scope.countdown -= 1;
      if ($scope.countdown === 0) {
        $scope.search($scope.username);
      }
    };

    $scope.startCountdown();

}); //end module


  /*
  //$interval(fn, delay, [count], [invokeApply], [Pass]);
  var decrementCountDown = function() {
    $scope.countdown -= 1;
    if ($scope.countdown < -1) {
      $scope.search($scope.username);
    }

    $scope.startCountdown = function() {
        $interval(decrementCountDown, 1000,$scope.countdown);
     };
     $scope.startCountdown();
   };
   */
