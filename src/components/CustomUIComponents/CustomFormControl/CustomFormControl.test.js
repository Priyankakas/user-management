import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "REDUX/store";

import CustomFormControl from "COMPONENTS/CustomFormControl/CustomFormControl";

describe('(component) CustomFormControl', () => {

  beforeEach(() => {

  })
  afterEach(() => {

  })

  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <CustomFormControl />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})
