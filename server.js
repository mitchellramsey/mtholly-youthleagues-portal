// Dependencies
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const db = require('./models');
const passport = require("passport");
const logger = require("morgan");
const session = require("express-session");
const flash = require("connect-flash");
const cookieSession = require("cookie-session");

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

// Requiring controllers
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


// import routes and give the server access to them.
require("./routes/coach-route.js")(app);
require("./routes/game-route.js")(app);
require("./routes/kid-api-route.js")(app);
require("./routes/parent-api-route.js")(app);
require("./routes/practice-route.js")(app);
require("./routes/sport-api-route.js")(app);
require("./routes/team-route.js")(app);





// Starting the server
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});
