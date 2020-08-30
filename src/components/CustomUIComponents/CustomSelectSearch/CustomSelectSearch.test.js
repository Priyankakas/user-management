import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "REDUX/store";

import CustomSelectSearch from "COMPONENTS/CustomSelectSearch/CustomSelectSearch";

describe('(component) CustomSelectSearch', () => {

  beforeEach(() => {

  })
  afterEach(() => {

  })

  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <CustomSelectSearch />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})
