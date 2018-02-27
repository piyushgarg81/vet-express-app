var express = require("express");
var router = express.Router();
var owners = require("../models/owners");
var pets = require("../models/pets");

// INDEX get
router.get("/", function(req, res) {
  res.status(200).send(owners);
});

//SHOW get with an id
router.get("/:id", function(req, res) {
  console.log("Our params are:", req.params);
  // getting the id from the url
  var id = parseInt(req.params.id);
  //find the owner
  var found = owners.filter(owner => owner.id === id);
  //send the owner to the browswer
  res.status(200).send(found);
});

// INDEX all pets for a given owner id
router.get("/:id/pets", function(req, res) {
  console.log("new custom route has an id: ", req.params);
  // get id from the params
  var id = parseInt(req.params.id);
  // lets find all the matching pets
  var petsByOwnerId = pets.filter(pet => pet.owner_id === id);
  // console.log(petsByOwnerId)
  //send the pets to the browser
  if (petsByOwnerId.length > 0) {
    res.status(200).send(petsByOwnerId);
  } else {
    res.status(200).send("No pets with that id.");
  }
});

module.exports = router;
