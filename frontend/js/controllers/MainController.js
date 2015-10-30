app.controller('MainController', function($scope, $http) {
	$scope.pokemon = [];
$scope.roster = [
              {
                name:"Pikachu", 
                avatarUrl: 'http://rs795.pbsrc.com/albums/yy232/PixKaruumi/Pokemon%20Pixels/Pikachu_Icon__free__by_Aminako.gif~c200',
                type:"Electric", 
                hp:80, 
                attack:20, 
                defense:4
              },
              {
                name:"Charizard", 
                avatarUrl: 'http://media.giphy.com/media/GN8fj5G9F0NnW/giphy.gif',
                type:"Fire", 
                hp:120, 
                attack:35, 
                defense:6
              },
              {
                name:"Mew", 
                avatarUrl: 'http://media3.giphy.com/media/J5JrPT8r1xGda/giphy.gif',
                type:"Psychic", 
                hp:60, 
                attack:45, 
                defense:2
              },
              {
                name:"Haunter", 
                avatarUrl: 'http://25.media.tumblr.com/5228817268c105a3308036021a39a612/tumblr_mo3yc0jVmQ1s3bc1no1_500.gif',
                type:"Ghost", 
                hp:55, 
                attack:25, 
                defense:12
              },
              {
                name:"Snorlax", 
                avatarUrl: 'https://38.media.tumblr.com/a5f012a2bc5a5f612c592a71c09713a3/tumblr_mrnj1lGkXQ1rfjowdo1_500.gif',
                type:"Normal", 
                hp:100, 
                attack:25, 
                defense:10
              },
              {
                name:"Dragonite", 
                avatarUrl: 'http://orig02.deviantart.net/8d85/f/2013/206/2/b/pixel_dragonite_by_fawly-d6f5aos.gif',
                type:"Dragon", 
                hp:115, 
                attack:40, 
                defense:11
              }
          ]
	$scope.user = "";
	$scope.getPokemon = function() {
		$http.get("pokemon").success(function(response) {
			$scope.pokemon = response;
		});
	};
	$scope.postUser = function() {
		parameter = JSON.stringify({user: "Ash", win:0, loss:0, pokemon: $scope.roster});
		$http.post("user", parameter).success(function(data, status, headers, config) {
			console.log(data);
		});
	};
});
