// Dependencies and Imports
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./Shared/rootReducer/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import setAuthorizationToken from "./utils/setAuthorizationToken";
import { setCurrentUser } from "./actions/login";
import jwt_decode from 'jwt-decode';
import authenticateRoutes from "../src/utils/authenticateRoutes";

// ------------------ Pages ----------------------- //
import Landing from "./pages/Landing";
import SignupPage from "./pages/SignupPage";
import ParentPortal from "./pages/ParentPortal";
import CoachesLogIn from "./pages/CoachesLogIn/CoachesLogIn";
import CoachesSignUp from "./pages/CoachesSignUp/CoachSignUpPage";
import AdminLogInPage from "./pages/AdminLogInPage/AdminLogInPage";

// ------------------ CSS ----------------------- //
import './App.css';


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  )
);

// If JWT token exists, set it
if(localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  // Dispatch the action
  store.dispatch(setCurrentUser(jwt_decode(localStorage.jwtToken)))
}



const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          {/* Homepage */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/parent-portal" component={authenticateRoutes(ParentPortal)} />
          <Route exact path="/coacheslogin" component={CoachesLogIn} />
          <Route exact path="/coachessignup" component={CoachesSignUp} />
          <Route exact path="/adminlogin" component={AdminLogInPage} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
