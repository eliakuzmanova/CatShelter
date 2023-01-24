const mongoose = require('mongoose');

const catShelterSchema = new mongoose.Schema({
    "name": String,
    "imageUrl": String,
    "breed": String,
    "description": String,
})

const Cat = mongoose.model("Cat", catShelterSchema)

module.exports = Cat