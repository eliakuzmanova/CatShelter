const app = require("express")();

require("./config/express")(app)

const mongoose = require('mongoose');

async function main() {
    mongoose.set('strictQuery', false);
    await mongoose.connect("mongodb://localhost:27017/catShelter");
    console.log("Database connected");
}

main();

app.listen(5055, console.log("Listening on port 5055..."));