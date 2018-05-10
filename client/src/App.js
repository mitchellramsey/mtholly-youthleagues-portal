import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import AdminLogin from "./pages/AdminLogin";
import SignupPage from "./pages/SignupPage";
import ParentPortal from "./pages/ParentPortal";
import './App.css';

const App = () => (
  <Router>
    <div>
      <Switch>
        {/* Homepage */}
        <Route exact path="/" component={Landing} />
        <Route path="/admin" component={AdminLogin} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/parent/:parentId" component={ParentPortal} />
      </Switch>
    </div>
  </Router>
);

export default App;
