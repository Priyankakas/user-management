import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";
import { HashRouter as Router } from "react-router-dom";

import setLanguageAction from "redux/Actions/LanguageAction";

//Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { changeLanguage } from "resources/i18n/i18n";

//Style
import "./Layout.scss";

//This component will act as wrapper for Header,Sidebar and loaded component

//Header contains navlink so wrap this component inside router to load components on url change

class Layout extends Component {
  constructor(props) {
    super(props);
    changeLanguage(this.props.language);
  }

  render() {
    return (
      <Router>
        <div className="Layout">
          <Header />
          {this.props.children}
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (storeData) => {
  return {
    language: storeData.LanguageReducer.language,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      // setThemeAction,
      setLanguageAction,
    },
    dispatch
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Layout)
);
