// SETUP DEPENDECIES
var express 	= require("express"),
	app 				= express(),
	pry 				= require("pryjs"),
	bodyParser 	= require("body-parser"), 
	mongoose 		= require("mongoose"),
  fs 					= require('fs')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

// PDF Headers
// function setResponseHeaders(res, filename) {
//   res.header('Content-disposition', 'inline; filename=' + filename);
//   res.header('Content-type', 'application/pdf');
// }

// DB SETUP
// mongoose.connect("mongodb://localhost/portfolio");
// var contactSchema = new mongoose.Schema({
// 	name: String, 
// 	email: String, 
// 	message: String
// });
// var Contact = mongoose.model("Contact", contactSchema);

// DB VARIABLES
// var George = new Contact({
// 	name: "George", 
// 	age: 11, 
// 	temperament: "Grouchy"
// });

// George.save(function(err,Contact){
// 	if(err){
// 		console.log("George not saved");
// 	} else {
// 		console.log("Saved George");
// 		console.log(Contact);
// 	}
// })

// Contact.create({
// 	name: "Snow White", 
// 	age: 15, 
// 	temperament: "Bland"
// }, function(err, Contact){
// 	if (err) {
// 		console.log("error saving Contact");
// 	} else{
// 		console.log(Contact);
// 	}
// });

// Contact.find({}, function(err, cats){
// 	if(err){
// 		console.log("error in Cats");
// 		console.log(err);
// 	} else{
// 		console.log("All the cats");
// 		console.log(cats);
// 	}
// });

// VARIABLES
	// var friends = ["Tony", "Dave", "Josue"];

// ROUTES

// app.get("/campgrounds", function(req, res){
// 	Campground.find({}, function(err, allcampgrounds){
// 		if (err) {
// 			console.log("error rendering all campgrounds")
// 		} else {
// 			res.render("campgrounds", {campgrounds: allcampgrounds})
// 		}
// 	})
// });

// app.post("/campgrounds", function(req, res){
// 	var name = req.body.name;
// 	var image = req.body.image;
// 	var newCampground = {name: name, image: image};
// 	Campground.create(newCampground, function(err, newlyCreated){
// 		if (err) {
// 			console.log(err)
// 		} else{
// 			res.redirect("/campgrounds");
// 		}
// 	})
// })

app.get("/", function(req, res){
	res.render("home")
})

app.get('/resume', function(request, response){
  var tempFile="./public/images/Nicolai_Robles_Resume.pdf";
  fs.readFile(tempFile, function (err,data){
     response.contentType("application/pdf");
     response.send(data);
     if (err) {
			console.log(err)
		}
  });
});

// app.get('/resume', function(req, res, next) {
//   var filename = req.params.filename;
//   file = tmpdir + filename;
//   setResponseHeaders(res, filename);

//   Phantom.create(function(phantom) {
//     phantom.createPage(function(page) {

//       // Render PDF and send to browser
//       function dispatchPDF() {
//         page.render(file, function() {
//           fs.createReadStream(file).pipe(res);
//           phantom.exit();
//         });
//       };

//       page.set('content', "<p>hello i am content</p>");
//       page.set('paperSize', '5in');
//       page.set('onLoadFinished', dispatchPDF);
//     });
//   });
// });

// app.get("/fallinlovewith/:thing", function(req, res){
// 	var thing = req.params.thing;
// 	res.render("love.ejs", {ThingVar: thing})
// })

// app.get("/posts", function(req, res){
// 	var posts = [
// 		{title: "Post 1", author: "Susy"}, 
// 		{title: "My adorable pet bunny", author: "Charlie"}, 
// 		{title: "Can you believe this Pomsky", author: "Colt"}
// 	]
// 	res.render("posts.ejs", {posts: posts})
// })

// app.post("/addfriend", function(req, res){
// 	var newFriend = req.body.newfriend;
// 	friends.push(newFriend);
// 	res.redirect("/friends");
// })

// app.get("/friends", function(req, res){
// 	res.render("friends", {friends: friends});
// })

// SERVER SETUP
app.listen(process.env.PORT || 4000, function(){
	console.log("server is listening")
})
