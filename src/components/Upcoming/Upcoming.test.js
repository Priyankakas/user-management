import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "REDUX/store";

import Upcoming from "COMPONENTS/Upcoming/Upcoming";

describe('(component) Upcoming', () => {

  beforeEach(() => {

  })
  afterEach(() => {

  })

  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <Upcoming />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})
