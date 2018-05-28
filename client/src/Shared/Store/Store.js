// Redux imports
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";

// Redux persist
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';


// Redux root reducer
import rootReducer from "../rootReducer/rootReducer";

// ---------------------------------------------------------- //

const persistConfig = {
  key: "root",
  storage: storage
 };

const persist = persistReducer(persistConfig, rootReducer);

// Creating Redux store
export let store = createStore(
    persist,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

export let persistor = persistStore(store);