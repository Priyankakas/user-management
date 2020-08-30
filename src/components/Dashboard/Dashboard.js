import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Row } from "reactstrap";

import LanguageSelector from "components/CustomUIComponents/LanguageSelector/LanguageSelector";

import setLanguageAction from "redux/Actions/LanguageAction";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {}

  setLanguage = (language) => {
    this.props.setLanguageAction(language);
  };

  render() {
    return (
      <div className="dashboard m-3">
        Welcome To Dashboard
        <Row className="mx-0 justify-content-between">
          <LanguageSelector
            handleLanguageChange={this.setLanguage}
            language={this.props.language}
          />
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (storeData) => {
  return {
    language: storeData.LanguageReducer.language,
    loggedInUser: storeData.LoginReducer.loggedInUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setLanguageAction }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
