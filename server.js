const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const routes = require("./routes");
const app = express();
const path = require("path");
const app = express();
const PORT = process.env.PORT || 9080;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);


//Start Routes===================================
//HTML and API routes initialized
const htmlRoutes = require("./routes/html.js")
const apiRoutes = require("./routes/api.js");
app.use(htmlRoutes);
app.use(apiRoutes);

// Start the API server
db.sequelize.sync({ force: false}).then(()=> {
  app.listen(PORT, () =>{
      console.log(`Listening on PORT ${PORT}`)
  })
})
