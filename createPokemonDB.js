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
    myDB.dropCollection("Original152");
    myDB.createCollection("Original152", function(err, Original152){
        addObject(Original152, 
          {
              name:"Pikachu", 
              avatarUrl: 'http://rs795.pbsrc.com/albums/yy232/PixKaruumi/Pokemon%20Pixels/Pikachu_Icon__free__by_Aminako.gif~c200',
              type:"Electric", 
              hp:80, 
              attack:20, 
              defense:4
          }
        );
        addObject(Original152, {name:"Voltorb", avatarUrl: 
            'https://lh5.googleusercontent.com/nOYOsIs9ruSM-iKbbU0T1cvG8_cV42dXpUSRjQFtvQRHQTBfHDZKXZzMkKxlfkRqZINZlmyeXFVb6y-6Fbv_YU4fOV4vpnsBL4pAXPZL2aLD-TmrMg',
            type:"Electric", hp:65, attack:15, defense:10});
        addObject(Original152, {name:"Charizard", avatarUrl: 
            'http://media.giphy.com/media/GN8fj5G9F0NnW/giphy.gif',
            type:"Fire", hp:120, attack:35, defense:6});
        addObject(Original152, {name:"Arcanine", avatarUrl: 
            'https://38.media.tumblr.com/ef3212f500685e317b5e2574f5a7b3ed/tumblr_mg68jsaBay1rmu6i5o1_500.gif',
            type:"Fire", hp:90, attack:30, defense:8});
        addObject(Original152, {name:"Mew", avatarUrl: 
           'http://media3.giphy.com/media/J5JrPT8r1xGda/giphy.gif',
            type:"Psychic", hp:60, attack:45, defense:2});
        addObject(Original152, {name:"Kadabra", avatarUrl: 
            'http://25.media.tumblr.com/52fc4bf3e6b4552c91a9074e9acef6ea/tumblr_ml4k75rvdz1s3bc1no3_250.gif',
             type:"Psychic", hp:65, attack:40, defense:4});
        addObject(Original152, {name:"Cubone", avatarUrl: 
            'http://rs1169.pbsrc.com/albums/r511/nthndo/tumblr_ljsx6dPMNm1qii50go1_400.gif~c200',
            type:"Ground", hp:65, attack:17, defense:10});
        addObject(Original152, {name:"Sandslash", avatarUrl: 
            'https://31.media.tumblr.com/1b72d0f0182937c46219c65356d2732c/tumblr_mm4rsrp7jk1rfjowdo1_500.gif',
            type:"Ground", hp:65, attack:20, defense:8});
        addObject(Original152, {name:"Haunter", avatarUrl: 
            'http://25.media.tumblr.com/5228817268c105a3308036021a39a612/tumblr_mo3yc0jVmQ1s3bc1no1_500.gif',
            type:"Ghost", hp:55, attack:25, defense:12});
        addObject(Original152, {name:"Blastoise", avatarUrl: 
            'http://24.media.tumblr.com/d605d9695ddb802f9083289f8c61b207/tumblr_n25eyqXllk1s3bc1no3_400.gif',
             type:"Water", hp:120, attack:30, defense:15});
        addObject(Original152, {name:"Vaporeon", avatarUrl: 
            'http://rs680.pbsrc.com/albums/vv169/Horohoro1snowboard/134.gif~c200',
            type:"Water", hp:75, attack:20, defense:7});
        addObject(Original152, {name:"Venusaur", avatarUrl: 
            'http://38.media.tumblr.com/f7bb96e33114a7aff2a8b2cfc462de69/tumblr_mm50rc6En31s5h198o1_500.gif',
            type:"Grass", hp:130, attack:30, defense:8});
        addObject(Original152, {name:"Vileploom", avatarUrl: 
            'http://24.media.tumblr.com/350bbef76db5a6e616f963f443e819a8/tumblr_msevkl1bAu1s29bhho2_500.gif',
            type:"Grass", hp:80, attack:20, defense:6});
        addObject(Original152, {name:"Onix", avatarUrl: 
            'http://38.media.tumblr.com/0fc126fabcbc5ce5fc5bcc0f8b9590ff/tumblr_n25s6ffEYn1s3bc1no1_r1_500.gif',
            type:"Rock", hp:100, attack:25, defense:15});
        addObject(Original152, {name:"Geodude", avatarUrl: 
            'http://24.media.tumblr.com/e389b997e1190eae462f3bd3c80e3091/tumblr_n6rgfhtNgS1qk6eteo1_400.gif',
            type:"Rock", hp:80, attack:18, defense:12});
        addObject(Original152, {name:"Hitmonlee", avatarUrl: 
            'http://vignette2.wikia.nocookie.net/mcleodgaming/images/4/4b/Hlee0.png/revision/latest?cb=20131226100907',
            type:"Fighting", hp:75, attack:35, defense:5});
        addObject(Original152, {name:"Scyther", avatarUrl: 
            'http://33.media.tumblr.com/tumblr_ljiaju6wsP1qg0dcvo1_400.gif',
            type:"Bug", hp:70, attack:17, defense:5});
        addObject(Original152, {name:"Beedrill", avatarUrl: 
            'http://38.media.tumblr.com/tumblr_maorbj6OOz1rfjowdo1_500.gif',
            type:"Bug", hp:60, attack:15, defense:3});
        addObject(Original152, {name:"Nidoqueen", avatarUrl: 
            'https://31.media.tumblr.com/05ab7ae86215ac5f9a30a7f7f0131ebc/tumblr_mm4rybT3ao1rfjowdo1_500.gif',
            type:"Normal", hp:90, attack:22, defense:9});
        addObject(Original152, {name:"Snorlax", avatarUrl: 
            'https://38.media.tumblr.com/a5f012a2bc5a5f612c592a71c09713a3/tumblr_mrnj1lGkXQ1rfjowdo1_500.gif',
            type:"Normal", hp:100, attack:25, defense:10});
        addObject(Original152, {name:"Dragonite", avatarUrl: 
            'http://orig02.deviantart.net/8d85/f/2013/206/2/b/pixel_dragonite_by_fawly-d6f5aos.gif',
            type:"Dragon", hp:115, attack:40, defense:11});
        addObject(Original152, {name:"Gyrados", avatarUrl: 
            'http://guidesmedia.ign.com/guides/059687/images/blackwhite/pokemans_130.gif',
            type:"Dragon", hp:90, attack:30, defense:8});
      }
    );
  setTimeout(function(){ db.close(); }, 3000);
});
