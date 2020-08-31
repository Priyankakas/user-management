import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

//Translation
import { changeLanguage } from "resources/i18n/i18n";

//Constants
import { ROUTES } from "constants/routeConstants";

// This Component will act as intermediate Route from React-Router
class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    //when page refresh call this for retaining selected language
    changeLanguage();
  }

  componentDidMount() {
    //scroll to top when component renders
    window.scrollTo(0, 0);
    console.log("looged", this.props.loggedInUser);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const { loggedInUser, path, component, exact, ...rest } = this.props;
    return !window.location.href.endsWith(ROUTES.LOGIN) ? (
      /* handle browser back-button if user is on login page */
      loggedInUser !== "" && loggedInUser !== undefined ? (
        <Route path={path} component={component} exact={exact} {...rest} />
      ) : (
        <Redirect
          push
          to={{
            pathname: "/login",
          }}
        />
      )
    ) : (
      <Route path={path} component={component} exact={exact} {...rest} />
    );
  }
}
const mapStateToProps = (storeData) => ({
  loggedInUser: storeData.LoginReducer.loggedInUser,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);
