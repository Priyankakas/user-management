import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThemeProvider } from "styled-components";

import { THEMES } from "constants/appConstants";

//Constants for styles
import { greenTheme, blueTheme } from "resources/styles/themes";
// import { GlobalStyles } from "resources/styles/global";

//styles
import "./App.scss";

class App extends Component {
  render() {
    return (
      <ThemeProvider
        theme={this.props.theme === THEMES.BLUE ? blueTheme : greenTheme}
      >
        {/* <GlobalStyles /> */}
        <div className="app">
          <div className="main-content">{this.props.children}</div>
        </div>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (storeData) => {
  return {
    theme: storeData.ThemeReducer.theme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
