import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "REDUX/store";

import AddUser from "COMPONENTS/AddUser/AddUser";

describe('(component) AddUser', () => {

  beforeEach(() => {

  })
  afterEach(() => {

  })

  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <AddUser />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})
