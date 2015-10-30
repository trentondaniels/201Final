app.controller('MainController', function($scope, $http) {
	$scope.pokemon = [];
	$scope.getPokemon = function() {
		$http.get("pokemon").success(function(response) {
			$scope.pokemon = response;
		});
	};
});
