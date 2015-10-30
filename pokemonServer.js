var fs = require('fs');
var http = require('http');
var url = require('url');
var readline = require('readline');
var ROOT_DIR = "frontend/";
http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true, false);
  // If this is our comments REST service
  if(urlObj.pathname.indexOf("pokemon") !=-1) {
    console.log("Pokemon Database");
    if(req.method === "GET") {
      console.log("In GET"); 
      // Read all of the database entries and return them in a JSON array
      var MongoClient = require('mongodb').MongoClient;
      MongoClient.connect("mongodb://localhost/pokemon", function(err, db) {
        if(err) throw err;
        db.collection("Original152", function(err, Original152){
          if(err) throw err;
          Original152.find(function(err, items){
            items.toArray(function(err, itemArr){
              console.log("Document Array: ");
              console.log(itemArr);
	            res.writeHead(200);
              res.end(JSON.stringify(itemArr));
            });
          });
        });
      });
    }
  }
  else if (urlObj.pathname.indexOf("user") !=-1) {
    console.log("Pokemon Database/User Collection");
    if(req.method === "POST") {
      console.log("POST user route");
      var jsonData = "";
      req.on('data', function (chunk) {
        jsonData += chunk;
      });
      req.on('end', function () {
        var reqObj = JSON.parse(jsonData);
        console.log(reqObj);
        var MongoClient = require('mongodb').MongoClient;
        MongoClient.connect("mongodb://localhost/pokemon", function(err, db) {
          if(err) throw err;
          db.collection('Users').insert(reqObj,function(err, records) {
            console.log("Record added as "+records[0]._id);
            res.writeHead(200);
            res.end("");
          });
        });
      });
    }
  }
  else {
   // Normal static file
    fs.readFile(ROOT_DIR + urlObj.pathname, function (err,data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
  }
}).listen(3004);
