
// Dependencies
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const db = require('./models');
const logger = require("morgan");

// ----------------------------------------------------------------------------------- //

// Initializing Express
let app = express();
const PORT = process.env.PORT || 3001;
// Serving up the public folder to give static content
app.use(express.static("client/build"));

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

const createSport = require("./controllers/createSport");
app.use("/api/getsport", createSport);
app.use("/api/postsport", createSport);

const createGame = require("./controllers/createGame");
app.use("/api/createGame", createGame);
app.use("/api/getGame", createGame);

const createPractice = require("./controllers/createPractice");
app.use("/api/createPractice", createPractice);

const coachFindTeams = require("./controllers/coachFindTeams");
app.use("/api/coachFindTeams/", coachFindTeams);

const createTeam = require("./controllers/createTeam");
app.use("/api/teams", createTeam);
app.use("/api/findteams/", createTeam);

const registerChild = require("./controllers/registerChild-controllers");
app.use("/api/registerChild", registerChild);
app.use("/api/retrieveChildren", registerChild);
app.use("/api/children", registerChild);

const retrieveKidInfo = require("./controllers/retrieveKidInfo");
app.use("/api/kidInfo/", retrieveKidInfo);

const retrieveSchedules = require("./controllers/retrieveSchedules");
app.use("/api/findSchedules/", retrieveSchedules);

const assignChildren = require("./controllers/assignChildren");
app.use("/api/assignChildren", assignChildren);
app.use("/api/children", assignChildren);

const assignCoach = require("./controllers/assignCoach");
app.use("/api/assignCoach", assignCoach);
app.use("/api/coach", assignCoach);

const adminLogInControllers = require("./controllers/adminLogInControllers");
app.use("/api/auth/admin", adminLogInControllers);

const payForChild = require("./controllers/payForChild-controller");
app.use("/api/paid", payForChild);

// ----------------------------------------------------------------------------------- //

// ----------------------------------------------------------------------------------- //
// Starting the server
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});


