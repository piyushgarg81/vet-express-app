// pets.js
var express = require("express");
var router = express.Router();
var pets = require("../models/pets");

// INDEX get
router.get("/", function(req, res) {
  res.status(200).send(pets);
});
//ABOUT
router.get("/about", function(req, res) {
  res
    .status(200)
    .send("This is a app to help with organizing pets and owners.");
});
//SHOW get with an id
router.get("/:id", function(req, res) {
  console.log("Our params are:", req.params);
  // getting the id from the url
  var id = parseInt(req.params.id);
  //find the pet
  var found = pets.filter(pet => pet.id === id);
  //send the pet to the browswer
  res.status(200).send(found);
});

module.exports = router;
