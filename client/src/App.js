import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./Shared/rootReducer/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import Landing from "./pages/Landing";
import SignupPage from "./pages/SignupPage";
import ParentPortal from "./pages/ParentPortal";
import './App.css';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

const App = () => (
<<<<<<< HEAD
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          {/* Homepage */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={SignupPage} />
        </Switch>
      </div>
    </Router>
  </Provider>
=======
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
>>>>>>> c441bbb838dd939face0ed399f21da34bc62f122
);

export default App;
