app.controller('MainController', function($scope, $http) {
	$scope.pokemon = [];
	$scope.userLogged = false;
	$scope.user = "";
  $scope.roster = [];
  $scope.rival = null;
  $scope.player = null;
  $scope.playerActive = null;
  $scope.rivalActive = null;
  $scope.fightInit = false
	$scope.getPokemon = function() {
		$http.get("pokemon").success(function(response) {
			$scope.pokemon = response;
		});
	};
	$scope.postUser = function() {
		parameter = angular.toJson({user: $scope.user, win:0, loss:0, pokemon: $scope.roster});
		$http.post("user", parameter).success(function(data, status, headers, config) {
			console.log(data);
		});
	};
  $scope.getUser = function() {
    $http.get("user").success(function(response) {
      rivalFound = false;
      while (!rivalFound) {
        index = Math.floor((Math.random() * response.length) + 0);
        if ($scope.user !== response[index].user) {
          rivalFound = true
        }
      }
      $scope.rival = response[index];
    });
  };
  $scope.getMe = function() {
    $http.get("me?activeUser=" + $scope.user).success(function(response) {
      $scope.player = response;
    });
  };
	$scope.checkUserName = function() {
		$scope.userLogged = true;
	};
  $scope.addToRoster = function(name) {
    if ($scope.roster.length < 6) {
      for (var i = 0; i < $scope.pokemon.length; i++) {
        if(name === $scope.pokemon[i].name) {
          $scope.roster.push($scope.pokemon[i]);
        }
      }
    }
  };
  $scope.startMatch = function() {
    $scope.postUser();
    $scope.fightInit = true;
    $scope.getUser()
    $scope.getMe();
    $scope.rivalActive = $scope.rival.pokemon[0];
    $scope.playerActive = $scope.player.pokemon[0];
  };
});
