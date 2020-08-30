import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "REDUX/store";

import CustomSelect from "COMPONENTS/CustomSelect/CustomSelect";

describe('(component) CustomSelect', () => {

  beforeEach(() => {

  })
  afterEach(() => {

  })

  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <CustomSelect />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})
