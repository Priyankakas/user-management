import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { LoginAction } from "./LoginAction";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//Components
import CustomFormControl from "components/CustomUIComponents/CustomFormControl/CustomFormControl";

//Constants
import { ROUTES } from "constants/routeConstants";

//Assets
import logo from "resources/images/ic_logo_login.png";

//Styles
import "./Login.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
    };
  }

  handleChange = (event, type) => {
    switch (type) {
      case "Username":
        this.setState({ userName: event.target.value });
        break;

      case "Password":
        this.setState({ password: event.target.value });
        break;

      default:
        break;
    }
  };

  loginClick = () => {
    if (this.state.userName === "priyanka" && this.state.password === "piyu") {
      let loggedInUser = {
        userName: this.state.userName,
        password: this.state.password,
      };

      this.props.LoginAction(loggedInUser);
      this.props.history.push(ROUTES.USERLIST);
    }
  };

  render() {
    return (
      <div className="login-style">
        <Col md={{ span: 10, offset: 1 }} className="login-container">
          <Col xs={5} className="quisQueya px-0">
            <img src={logo} alt="login" className="loginlogo" />
            <div className="copyright text-center">
              Copyright © 2018 Quisqueya
            </div>
          </Col>
          <Col xs={6} className="px-0">
            <Form className="LoginForm">
              <Col className="d-flex">LOGIN</Col>

              <Col className="d-flex justify-content-center">
                <CustomFormControl
                  type="text"
                  placeholder="Username"
                  value={this.state.userName}
                  handleChange={(event) => this.handleChange(event, "Username")}
                />
              </Col>

              <Col className="d-flex justify-content-center">
                <CustomFormControl
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  handleChange={(event) => this.handleChange(event, "Password")}
                />
              </Col>
              <Col md={12}>
                <Row>
                  <Col md={{ span: 7, offset: 3 }} className="SubmitButton">
                    <Button
                      variant="danger"
                      type="submit"
                      onClick={this.loginClick}
                    >
                      Login
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Form>
          </Col>
        </Col>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      LoginAction,
    },
    dispatch
  );
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Login)
);
