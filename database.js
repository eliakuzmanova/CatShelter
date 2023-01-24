const mongoose = require('mongoose');

async function main() {
    mongoose.set('strictQuery', false);
    await mongoose.connect("mongodb://localhost:27017/catShelter");
    console.log("Database connected");
}

module.exports = main;
