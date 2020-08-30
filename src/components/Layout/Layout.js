import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { HashRouter as Router } from "react-router-dom";

//Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

//Style
import "./Layout.scss";

//This component will act as wrapper for Header,Sidebar and loaded component

//Header contains navlink so wrap this component inside router to load components on url change

class Layout extends Component {
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

export default withRouter(connect(mapStateToProps)(Layout));
