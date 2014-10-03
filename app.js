var path = require("path"),
    express = require("express");

var app = express();

app.use(express.static(__dirname));

var port = process.env.PORT || 3000;
app.listen(port);
console.log("curated articles with discussion on port " + port)

app.get('/', function(req,res){
	
	res.json({"gov":"conference"});

})

