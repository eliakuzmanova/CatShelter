const app = require("express")();

require("./config/express")(app)

app.listen(5055, console.log("Listening on port 5055..."));