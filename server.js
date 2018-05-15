
// Dependencies
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const db = require('./models');
const logger = require("morgan");
const session = require("express-session");
const flash = require("connect-flash");
const cookieSession = require("cookie-session");

// ----------------------------------------------------------------------------------- //

// Initializing Express
let app = express();
const PORT = process.env.PORT || 3001;
// Setting up flash messages for session users
app.use(flash());
// Serving up the public folder to give static content
app.use(express.static("public"));

// Parse application/JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Using morgan to log server requests
app.use(logger("dev"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// ----------------------------------------------------------------------------------- //

// Requiring controllers
// ----------------------------------------------------------------------------------- //

const clientControllers = require("./controllers/client-controllers");
app.use("/client-controllers", clientControllers);

const signUpControllers = require("./controllers/signUp-controllers");
app.use("/api/users", signUpControllers)

const authControllers = require("./controllers/auth-controllers");
app.use("/api/auth", authControllers);

const parentPageEvents = require("./controllers/parentPageEvents");
app.use("/api/parentSubmit", parentPageEvents);

const coachSignUpControllers = require("./controllers/coachesSignUp-controllers");
app.use("/api/coachsignup", coachSignUpControllers);

const coachLogInControllers = require("./controllers/coachLogIn-controllers");
app.use("/api/auth/coaches", coachLogInControllers);

const coachGetRout = require("./controllers/coachGetRoute");
app.use("/api/coaches", coachGetRout);

const sportGetRoute = require("./controllers/sportGetRoute");
app.use("/api/sports", sportGetRoute);

const gameGetRoute = require("./controllers/gameGetRoute");
app.use("/api/games", gameGetRoute);

const practiceGetRoute = require("./controllers/practiceGetRoute");
app.use("/api/practice", practiceGetRoute);

const teamGetRoute = require("./controllers/teamGetRoute");
app.use("/api/teams", teamGetRoute);

const registerChild = require("./controllers/registerChild-controllers");
app.use("/api/registerChild", registerChild);
app.use("/api/retrieveChildren", registerChild);

const adminLogInControllers = require("./controllers/adminLogIncontrollers");
app.use("/api/auth/admin", adminLogInControllers);

// ----------------------------------------------------------------------------------- //

// ----------------------------------------------------------------------------------- //
// Starting the server
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});


