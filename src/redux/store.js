import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import { createBrowserHistory as createHistory } from "history";

// To persist redux state on pagerefresh
import { persistReducer, persistStore } from "redux-persist";
//redux-persist for session storage
import storage from "redux-persist/lib/storage/session";

//root reducer
import rootReducer from "../redux/Reducers/rootReducer";

export const history = createHistory();
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const persistConfig = {
  key: "root",
  storage: storage,
};

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  composedEnhancers
);

export const persistor = persistStore(store);
