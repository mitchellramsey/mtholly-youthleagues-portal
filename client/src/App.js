// Dependencies and Imports
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import setAuthorizationToken from "./utils/setAuthorizationToken";
import jwt_decode from 'jwt-decode';
import authenticateRoutes from "../src/utils/authenticateRoutes";

// Redux root reducer
import rootReducer from "./Shared/rootReducer/rootReducer";

// Redux imports
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";

// Actions
import { setCurrentUser } from "./actions/login";

// ------------------ Pages ----------------------- //
import Landing from "./pages/Landing";
import SignupPage from "./pages/SignupPage";
import ParentPortal from "./pages/ParentPortal";
import CoachesLogIn from "./pages/CoachesLogIn/CoachesLogIn";
import CoachesSignUp from "./pages/CoachesSignUp/CoachSignUpPage";
import CoachesPortal from "./pages/CoachesPage/CoachesPage";
import AdminLogInPage from "./pages/AdminLogInPage/AdminLogInPage";
import AdminPortal from "./pages/AdminPortal/";

// ------------------ CSS ----------------------- //
import './App.css';

// Creating Redux store
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// If JWT token exists, set it
if(localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  // Dispatch the action
  store.dispatch(setCurrentUser(jwt_decode(localStorage.jwtToken)))
}


// Main
const App = () => (
  // Redux store
  <Provider store={store}>
  {/* React Router */}
    <Router>
      <div>
        {/* React Switch for routing */}
        <Switch>
          {/* Homepage */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/parent-portal" component={authenticateRoutes(ParentPortal)} />
          <Route exact path="/coacheslogin" component={CoachesLogIn} />
          <Route exact path="/coachessignup" component={CoachesSignUp} />
          <Route exact path="/coachesportal" component={authenticateRoutes(CoachesPortal)} />
          <Route exact path="/adminlogin" component={AdminLogInPage} />
          <Route exact path="/adminportal" component={authenticateRoutes(AdminPortal)} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

// Exporting the App
export default App;
