var express = require("express");
var exphbs = require("method-override");
var exphbs = require("body-parser");

var app = express();

var PORT = process.env.PORT || 3033;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);