/* eslint-disable */
// Dependencies and Imports
import Loading from "react-loading-animation";
import React from "react";

// Redux imports
import { Provider } from "react-redux";
import { store, persistor } from "./Shared/Store/Store";

// Redux persist
import { PersistGate } from 'redux-persist/lib/integration/react';

// ------------------ Pages ----------------------- //
import RouterContainer from "./RouteContainer/RouteContainer";

// ------------------ CSS ----------------------- //
import './App.css';

// Main
const App = () => (
  // Redux store
  <Provider store={store}>
    {/* React Persist to keep state through refreshes */}
    <PersistGate loading={<Loading/>} persistor={persistor}>
      {/* Router Container */}
      <RouterContainer/>
    </PersistGate>
  </Provider>
);

// Exporting the App
export default App;
