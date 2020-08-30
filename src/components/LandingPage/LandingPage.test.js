import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "REDUX/store";

import LandingPage from "COMPONENTS/LandingPage/LandingPage";

describe('(component) LandingPage', () => {

  beforeEach(() => {

  })
  afterEach(() => {

  })

  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <LandingPage />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})
