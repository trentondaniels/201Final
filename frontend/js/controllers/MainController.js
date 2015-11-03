app.controller('MainController', function($scope, $http) {
	$scope.pokemon = [];
	$scope.userLogged = false;
	$scope.user = "";
  $scope.roster = [];
  $scope.rival = null;
  $scope.player = null;
  $scope.playerActive = null;
  $scope.rivalActive = null;
  $scope.fightInit = false;
  $scope.battleOver = false;
  $scope.switchMode = false;
  $scope.winner = "";
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
      $scope.rivalActive = $scope.rival.pokemon[0];
    });
  };
  $scope.getMe = function() {
    $http.get("me?activeUser=" + $scope.user).success(function(response) {
      $scope.player = response;
      $scope.playerActive = $scope.player.pokemon[0];
      $scope.fightInit = true;
    });
  };
	$scope.checkUserName = function() {
    var submit = true
    $http.get("user").success(function(response) {
      for(var i = 0; i < response.length; i++) {
        if($scope.user === response[i].user) {
          submit = false;
          alert("That name has already been used");
          break;
        }
      }
      if(submit) {
        $scope.userLogged = true;
      }
    });
  };
  $scope.addToRoster = function(name) {
    if ($scope.roster.length < 6) {
      for (var j = 0; j < $scope.roster.length; j++) {
        if(name === $scope.roster[j].name) {
          alert("You already have " + name + " on your roster");
          return;
        }
      }
      for (var i = 0; i < $scope.pokemon.length; i++) {
        if(name === $scope.pokemon[i].name) {
          $scope.roster.push($scope.pokemon[i]);
        }
      }
    }
    else {
      alert("You can only have 6 pokemon!");
      return;
    }
  };
  $scope.startMatch = function() {
    $scope.postUser();
    $scope.getUser();
    $scope.getMe();
  };


  //Simulates a round of attacks
  $scope.attack = function() {
    //Player's turn
    damage = $scope.playerActive.attack - $scope.rivalActive.defense
    if (damage < 0) {
      damage = 0;
    }
    if ($scope.rivalActive.hp - damage <= 0) {
      $scope.rivalActive.hp = 0;
      for (var j = 0; j < $scope.rival.pokemon.length; j++) {
        if ($scope.rivalActive.name === $scope.rival.pokemon[j].name) {
          $scope.rival.pokemon[j].hp = $scope.rivalActive.hp;
          id = "#rival" + $scope.rival.pokemon[j].name;
          console.log(id);
          angular.element(document.querySelector(id)).removeClass("playable");
          angular.element(document.querySelector(id)).addClass("KO");
          for(var x = 0; x < $scope.rival.pokemon.length; x++) {
            if($scope.rival.pokemon[x].hp > 0) {
              $scope.rivalActive = $scope.rival.pokemon[x];
              return;
            }
          }
          console.log("all dead");
          $scope.winner = $scope.player.user;
          $scope.battleOver = true;
          return
        }
      }
    }
    else {
      $scope.rivalActive.hp -= damage;
    }


    //Rivals Turn
    damage = $scope.rivalActive.attack - $scope.playerActive.defense
    if (damage < 0) {
      damage = 0;
    }
    if ($scope.playerActive.hp - damage <= 0) {
      $scope.playerActive.hp = 0;
      for (var i = 0; i < $scope.player.pokemon.length; i++) {
        if ($scope.playerActive.name === $scope.player.pokemon[i].name) {
          $scope.player.pokemon[i].hp = $scope.playerActive.hp;
          id = "#player" + $scope.player.pokemon[i].name;
          console.log(id);
          angular.element(document.querySelector(id)).removeClass("playable");
          angular.element(document.querySelector(id)).addClass("KO");
          for(var y = 0; y < $scope.player.pokemon.length; y++) {
            if($scope.player.pokemon[y].hp > 0) {
              $scope.switchMode = true;
              return;
            }
          }
          console.log("all dead");
          $scope.winner = $scope.rival.user;
          $scope.battleOver = true;
          return
        }
      }
    }
    else {
      $scope.playerActive.hp -= damage;
    }
  };
  $scope.changePokemon = function() {
    $scope.switchMode = true;
  }
  $scope.playAgain = function() {
    $scope.getUser();
    $scope.getMe();
    $scope.battleOver = false;
  };
  $scope.iChooseYou = function(name) {
    for(var i = 0; i < $scope.player.pokemon.length; i++) {
      if(name === $scope.player.pokemon[i].name) {
        $scope.playerActive = $scope.player.pokemon[i];
        break;
      }
    }
    $scope.switchMode = false;
  }
});
