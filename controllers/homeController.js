// const mongoose = require('mongoose')
const Cat = require("../models/Cat")


   
//ASYNC functions
exports.getHomeView =  async (req, res) => {

    const cats = await Cat.find().lean()
    res.render("index", {cats} );
}