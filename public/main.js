let ejs = require('ejs');
let express = require('express');

const app = express();
const port = 3000;

app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'))
app.use("/styles",express.static(__dirname + "/styles"));
app.use("/assets",express.static(__dirname + "/assets"));

app.get("/", function(req, res){
  res.render("index", {title: "Hello World", message: "this is the message", img: "assets/hassan-logo.png"})
})

app.get("/about", function(req, res){
  res.render("about", {title: "About Me", message: "This is a message that tells people a little bit about myself", img: "assets/hassan-logo.png"})
})

app.get("/projects", function(req, res){
  res.render("projects", {title: "My Projects", message: "This is a project that i am showing you", logo: "hassan-logo.png", p1: "http://placekitten.com/200/300", p2: "http://placekitten.com/200/300", p3: "http://placekitten.com/200/300", p1des: "first project", p2des: "second project", p3des: "third project"})
})

app.get("/contact", function(req, res){
  res.render("contact", {title: "Contact Me", message: "I can be reached with any of these contacts here", img: "assets/hassan-logo.png"})
})



app.listen(port , () => console.log(`Template engine listening on port ${port}`));
