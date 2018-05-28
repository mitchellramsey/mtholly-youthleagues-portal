/* eslint-disable */
// Dependencies and Imports
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";;
import Loading from "react-loading-animation";
import authenticateRoutes from "../src/utils/authenticateRoutes";
import CoachAuthenticateRoutes from "../src/utils/coachAuthenicateRoute";
import AdminAuthenticateRoutes from "../src/utils/adminAuthenticateRoute"

// Redux imports
import { Provider } from "react-redux";
import { store, persistor } from "./Shared/Store/Store";

// Redux persist
import { PersistGate } from 'redux-persist/lib/integration/react';

// ------------------ Pages ----------------------- //
import Landing from "./pages/Landing";
import SignupPage from "./pages/SignupPage";
import ParentPortal from "./pages/ParentPortal";
import CoachesLogIn from "./pages/CoachesLogIn/CoachesLogIn";
import CoachesSignUp from "./pages/CoachesSignUp/CoachSignUpPage";
import CoachesPortal from "./pages/CoachesPage/CoachesPage";
import AdminLogInPage from "./pages/AdminLogInPage/AdminLogInPage";
import AdminPortal from "./pages/AdminPortal/";
import Forbidden from "./pages/403/403";

// ------------------ CSS ----------------------- //
import './App.css';

// Main
const App = () => (
  // Redux store
  <Provider store={store}>
    {/* React Router */}
      <Router>
        <div>
          {/* React Switch for routing */}
          <Switch>
          <PersistGate loading={<Loading/>} persistor={persistor}>
            {/* Homepage */}
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/parent-portal" component={authenticateRoutes(ParentPortal)} />
            <Route exact path="/coacheslogin" component={CoachesLogIn} />
            <Route exact path="/coachessignup" component={CoachesSignUp} />
            <Route exact path="/coachesportal" component={CoachAuthenticateRoutes(CoachesPortal)} />
            <Route exact path="/adminlogin" component={AdminLogInPage} />
            <Route exact path="/adminportal" component={AdminAuthenticateRoutes(AdminPortal)} />
            <Route exact path="/403" component={Forbidden} />
            </PersistGate>
          </Switch>
        </div>
      </Router>
  </Provider>
);

// Exporting the App
export default App;
