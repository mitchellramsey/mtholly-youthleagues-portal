// Dependencies
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./models');
const passport = require("passport");
const logger = require("morgan");
const session = require("express-session");
const flash = require("connect-flash");
const cookieSession = require("cookie-session");
// Initializing passport
app.use(passport.initialize());
// Keeping log-in sessions persistent
app.use(passport.session());
// Setting up flash messages for session users
app.use(flash());
// Serving up the public folder to give static content
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/JSON
app.use(bodyParser.json());

// Using morgan to log server requests
app.use(logger("dev"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Requiring controllers
const clientControllers = require("./controllers/client-controllers");
app.use("/client-controllers", clientControllers);

// Starting the server
db.sequelize.sync({force:true}).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});
