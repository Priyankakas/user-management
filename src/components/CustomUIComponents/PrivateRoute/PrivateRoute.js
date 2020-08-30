import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

//Translation
import { changeLanguage } from "INTL/i18n";

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
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const { authToken, path, component, exact, ...rest } = this.props;
    return !window.location.href.endsWith(ROUTES.LOGIN) ? (
      /* handle browser back-button if user is on login page */
      authToken !== "" && authToken !== undefined ? (
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
const mapStateToProps = (state) => ({
  authToken: state.LoginReducer.authToken,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);
