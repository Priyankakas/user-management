import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

//Translation
import { getTranslation } from "resources/i18n/i18n";
import { Row } from "reactstrap";

class Contact extends Component {
  onNavigateDashBoard = () => {
    this.props.history.push("/dashboard");
  };

  componentDidMount() {
    console.log("contact", this.props.language);
  }

  render() {
    return (
      <div className="Contact m-3">
        {getTranslation("ContactPls")}
        {/* <p>User Id: &nbsp;{this.props.match.params.id}</p> */}
        <Row>
          <button
            onClick={this.onNavigateDashBoard}
            className="btn btn-primary"
          >
            Go To Dashboard
          </button>
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
  return bindActionCreators({}, dispatch);
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Contact)
);
