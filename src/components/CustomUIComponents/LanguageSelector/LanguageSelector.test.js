import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "REDUX/store";

import LanguageSelector from "COMPONENTS/LanguageSelector/LanguageSelector";

describe('(component) LanguageSelector', () => {

  beforeEach(() => {

  })
  afterEach(() => {

  })

  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <LanguageSelector />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})
