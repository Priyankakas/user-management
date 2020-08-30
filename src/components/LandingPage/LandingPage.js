import React from "react";

// Constants
import { ROUTES } from "constants/routeConstants";

//styles
import "./LandingPage.scss";

class LandingPage extends React.Component {
  componentDidMount() {
    // render login page by default
    this.props.history && this.props.history.push(ROUTES.LOGIN);
  }

  render() {
    return <div className="landingPage" />;
  }
}

export default LandingPage;
