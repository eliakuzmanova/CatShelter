const app = require("express")();

require("./database")()
require("./config/express")(app)

app.listen(5077, console.log("Listening on port 5077..."));