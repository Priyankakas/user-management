import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "REDUX/store";

import CustomToast from "COMPONENTS/CustomToast/CustomToast";

describe('(component) CustomToast', () => {

  beforeEach(() => {

  })
  afterEach(() => {

  })

  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <CustomToast />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})
