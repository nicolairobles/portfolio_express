// SETUP DEPENDECIES
var express 	= require("express"),
	app 				= express(),
	pry 				= require("pryjs"),
	bodyParser 	= require("body-parser"), 
	mongoose 		= require("mongoose"),
  fs 					= require('fs')
  
// Setup paths & configurations
app.createServer;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Homepage + Main Links
app.get("/", function(req, res){
	res.render("home")
})
app.get("/portfolio", function(req, res){
	res.render("portfolio")
})
// Project Story Links
app.get("/emotize-project", function(req, res){
	res.render("projects/emotize")
})
app.get("/chorus-project", function(req, res){
	res.render("projects/chorus")
})
app.get("/beat-the-machine-project", function(req, res){
	res.render("projects/beat-the-machine")
})
app.get("/emergency-compliment-project", function(req, res){
	res.render("projects/emergency-compliment")
})
// Live Project Links
app.get("/beat-the-machine", function(req, res){
	res.render("projects/live/beat-the-machine/index")
})
app.get("/pokemon", function(req, res){
	res.render("projects/live/pokemon/pokemon")
})

// Resume Link
app.get('/resume', function(request, response){
  var tempFile="./public/documents/Nicolai_Robles_Resume.pdf";
  fs.readFile(tempFile, function (err,data){
     response.contentType("application/pdf");
     response.send(data);
     if (err) {
			console.log(err)
		}
  });
});

// SERVER SETUP
app.listen(process.env.PORT || 4000, function(){
	console.log("server is listening")
})
