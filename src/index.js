import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App/App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { HashRouter, Switch, Route } from "react-router-dom";

//Components
import LandingPage from "components/LandingPage/LandingPage";
import Layout from "components/Layout/Layout";
import Login from "components/Login/Login";

//Store
import { store } from "./redux/store";

//RouteConstants
import { ROUTES } from "./constants/routeConstants";

// Routes
import routes from "routes";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App>
        <Switch>
          <Route exact path={ROUTES.ROOT_PATH} component={LandingPage} />
          <Route exact path={ROUTES.LOGIN} component={Login} />
          <Layout>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Layout>
        </Switch>
      </App>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
