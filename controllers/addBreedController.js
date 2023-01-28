const mongoose = require('mongoose')
const Breed = require("../models/Breed")

exports.getAddBreedView = (req,res) => {
    res.render("addBreed")
}

exports.postAddBreed = async (req,res) => {
    const breedName = req.body.breed
  
  let newBreed = new Breed({breedName})
    console.log(newBreed);
  await newBreed.save();

    res.redirect("/")
}