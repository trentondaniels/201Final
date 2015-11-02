app.controller('MainController', function($scope, $http) {
	$scope.pokemon = [];
	$scope.userLogged = false;
	$scope.user = "";
        $scope.roster = [];
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
	$scope.checkUserName = function() {
		$scope.userLogged = true;
	};
  $scope.addToRoster = function(name) {
    console.log(name);
    if ($scope.roster.length < 6)
    {
        for (var i = 0; i < $scope.pokemon.length; i++)
        {
          if(name === $scope.pokemon[i].name)
          {
            $scope.roster.push($scope.pokemon[i]);
          }
        }
    }
  };
});

