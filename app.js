// app configuration
var express = require("express");
var bodyParser = require("body-parser");
var petsRouter = require("./routes/pets");
var ownersRouter = require("./routes/owners");
var app = express();

var port = process.env.PORT || 3000;

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// http gets
app.get("/", function(req, res) {
  res.send("welcome");
});

// use the pets router for any pets path
app.use("/pets", petsRouter);
app.use("/owners", ownersRouter)

app.listen(port);
console.log("Listening on port " + port);
