/* eslint-disable */
// Dependencies and Imports
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";;
import authenticateRoutes from "../utils/authenticateRoutes";
import CoachAuthenticateRoutes from "../utils/coachAuthenicateRoute";
import AdminAuthenticateRoutes from "../utils/adminAuthenticateRoute"

// ------------------ Pages ----------------------- //
import Landing from "../pages/Landing/Landing";
import SignupPage from "../pages/SignupPage";
import ParentPortal from "../pages/ParentPortal";
import CoachesLogIn from "../pages/CoachesLogIn/CoachesLogIn";
import CoachesSignUp from "../pages/CoachesSignUp/CoachSignUpPage";
import CoachesPortal from "../pages/CoachesPage/CoachesPage";
import AdminLogInPage from "../pages/AdminLogInPage/AdminLogInPage";
import AdminPortal from "../pages/AdminPortal/";
import Forbidden from "../pages/403/403";
import NotFound from "../pages/404/404";

// ----------------------------------------------------- //
// Router Container to export to App.js
export default class RouteContainer extends Component {
    render() {
        return (
        // React Router
        <Router>
            {/* React Switch to handle routes that arent matched/404's */}
            <Switch>
                {/* Homepage */}
                <Route exact path="/" component={Landing} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/parent-portal" component={authenticateRoutes(ParentPortal)} />
                <Route path="/coacheslogin" component={CoachesLogIn} />
                <Route path="/coachessignup" component={CoachesSignUp} />
                <Route path="/coachesportal" component={CoachAuthenticateRoutes(CoachesPortal)} />
                <Route path="/adminlogin" component={AdminLogInPage} />
                <Route path="/adminportal" component={AdminAuthenticateRoutes(AdminPortal)} />
                <Route path="/403" component={Forbidden} />
                <Route component={NotFound} />
            </Switch>
        </Router>
        )
    }

}
