// Redux imports
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";

// Redux persist
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';


// Redux root reducer
import rootReducer from "../rootReducer/rootReducer";

// ---------------------------------------------------------- //

// Persist config, storage pointing to local storage
const persistConfig = {
  key: "root",
  storage: storage
 };

// Persisting the combined reducers and the selected storage
const persist = persistReducer(persistConfig, rootReducer);

// Creating Redux store
export let store = createStore(
    persist,
    compose(
      applyMiddleware(thunk),
    )
  );

// Exporting the variable to be used in App.js
export let persistor = persistStore(store);