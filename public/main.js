let ejs = require('ejs');
let express = require('express');

const app = express();
const port = 3000;

app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'))
app.use("/styles",express.static(__dirname + "/styles"));
app.use("/assets",express.static(__dirname + "/assets"));

// In all the app.get() the info in res.render needs to be changed to fit what you actually want to be on the page. Changing these things will change what is displayed on there respective pages.

app.get("/", function(req, res){
  res.render("index", {title: "Hello World", message: "this is the message", logo: "assets/hassan-logo.png"})
})

app.get("/about", function(req, res){
  res.render("about", {title: "About Me", message: "This is a message that tells people a little bit about myself", logo: "assets/hassan-logo.png"})
})

app.get("/projects", function(req, res){
  res.render("projects", {title: "My Projects", message: "This is a project that i am showing you", logo: "assets/hassan-logo.png", p1: "http://placekitten.com/200/300", p2: "http://placekitten.com/200/300", p3: "http://placekitten.com/200/300", p1des: "first project", p2des: "second project", p3des: "third project"})
})

app.get("/contact", function(req, res){
  res.render("contact", {title: "Contact Me", message: "I can be reached with any of these contacts here", logo: "assets/hassan-logo.png"})
})

app.get("/services", function(req, res){
  res.render("services", {title: "My Projects", message: "This is a project that i am showing you", logo: "assets/hassan-logo.png", p1: "http://placekitten.com/200/300", p2: "http://placekitten.com/200/300", p3: "http://placekitten.com/200/300", p1des: "first project", p2des: "second project", p3des: "third project"})
})


app.listen(port , () => console.log(`Template engine listening on port ${port}`));
