var MongoClient = require('mongodb').MongoClient;
  function addObject(collection, object){
      collection.insert(object, function(err, result){
          if(!err) {
              console.log("Inserted : ");
              console.log(result);
          }
    });
}
MongoClient.connect("mongodb://localhost/", function(err, db) {  
    var myDB = db.db("pokemon");
    myDB.dropCollection("Users");
    myDB.createCollection("Users", function(err, Users){
        addObject(Users, 
          {
            user: "Red",
            win: 99,
            loss: 1,
            pokemon: [
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
          });
          addObject(Users, 
          {
            user: "Blue",
            win: 80,
            loss: 36,
            pokemon: [
              {
                name:"Blastoise", 
                avatarUrl: 'http://24.media.tumblr.com/d605d9695ddb802f9083289f8c61b207/tumblr_n25eyqXllk1s3bc1no3_400.gif',
                type:"Water", 
                hp:120, 
                attack:30, 
                defense:15
              },
              {
                name:"Venusaur", 
                avatarUrl: 'http://38.media.tumblr.com/f7bb96e33114a7aff2a8b2cfc462de69/tumblr_mm50rc6En31s5h198o1_500.gif',
                type:"Grass", 
                hp:130, 
                attack:30, 
                defense:8
              },
              {
                name:"Kadabra", 
                avatarUrl: 'http://25.media.tumblr.com/52fc4bf3e6b4552c91a9074e9acef6ea/tumblr_ml4k75rvdz1s3bc1no3_250.gif',
                type:"Psychic", 
                hp:65, 
                attack:40, 
                defense:4
              },
              {
                name:"Sandslash", 
                avatarUrl: 'https://31.media.tumblr.com/1b72d0f0182937c46219c65356d2732c/tumblr_mm4rsrp7jk1rfjowdo1_500.gif',
                type:"Ground", 
                hp:65, 
                attack:20, 
                defense:8
              },
              {
                name:"Nidoqueen", 
                avatarUrl: 'https://31.media.tumblr.com/05ab7ae86215ac5f9a30a7f7f0131ebc/tumblr_mm4rybT3ao1rfjowdo1_500.gif',
                type:"Normal", 
                hp:90, 
                attack:22, 
                defense:9
              },
              {
                name:"Gyrados", 
                avatarUrl: 'http://guidesmedia.ign.com/guides/059687/images/blackwhite/pokemans_130.gif',
                type:"Dragon", 
                hp:90, 
                attack:30, 
                defense:8
              }
            ]
          }
        );
      }
    );
  setTimeout(function(){ db.close(); }, 3000);
});
