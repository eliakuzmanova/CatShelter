// const mongoose = require('mongoose')
const Cat = require("../models/Cat")


    const catsCollection =Cat.find(function(err, cats) {
        if(!err) {
            return cats
        }
    })



exports.getHomeView =  (req, res) => {
  
    res.render("index", {catsCollection} );
}