const mongoose = require('mongoose');

const breedSchema = new mongoose.Schema({
    "breedName":{ 
        type: String,
        required: true
    },

}, {versionKey: false})
const Breed = mongoose.model("Breed", breedSchema)

module.exports = Breed