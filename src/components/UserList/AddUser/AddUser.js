import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Col, Row, Button, Form } from "react-bootstrap";
import Avatar from "react-avatar";
import axios from "axios";

//Components
import CustomSelectSearch from "components/CustomUIComponents/CustomSelectSearch/CustomSelectSearch";
import CustomFormControl from "components/CustomUIComponents/CustomFormControl/CustomFormControl";

//Actions
import { AddUserListAction, EditUserListAction } from "../UserListAction";

//Constants
import { ROUTES } from "../../../constants/routeConstants";

//getTranslation
// import { getTranslation } from "resources/i18n/i18n";

//Styles
import "./AddUser.scss";

const options = [
  { name: "Admin", value: "admin" },
  { name: "Operator", value: "operator" },
];

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: "",
      firstName: "",
      lastName: "",
      contact: "",
      role: "",
      img: "",
    };
  }

  //Input Text Change
  handleChange = (event, type) => {
    switch (type) {
      case "FirstName":
        this.setState({
          firstName: event.target.value,
        });
        break;

      case "LastName":
        this.setState({
          lastName: event.target.value,
        });
        break;

      case "UserName":
        this.setState({
          username: event.target.value,
        });
        break;

      case "Contact":
        this.setState({
          contact: event.target.value,
        });
        break;

      default:
        break;
    }
  };

  handleSelect = (option) => {
    this.setState({
      role: option,
    });
  };

  handleCancel = () => {
    this.props.history.push(ROUTES.USERLIST);
  };

  //ADD User
  addUser = () => {
    axios
      .post("http://localhost:3001/users", {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        contact: this.state.contact,
        role: this.state.role,
      })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });

    this.props.history.push({
      pathname: ROUTES.USERLIST,
    });
  };

  render() {
    return (
      <div className="add-user m-4">
        <Row>Add User</Row>
        <Row>
          <Col md={{ span: 4, offset: 2 }}>
            <Avatar
              name={this.state.img}
              maxInitials={2}
              round={true}
              className="mb-3"
            />
            <Col md={8} className="px-0">
              <CustomSelectSearch
                topLabel={"Role"}
                options={options}
                value={this.state.role}
                handleChange={this.handleSelect}
                placeholder={"Select"}
              />
            </Col>
          </Col>
          <Col md={{ span: 4 }} className="">
            <Form>
              <CustomFormControl
                type="text"
                topLabel="FirstName"
                placeholder="FirstName"
                value={this.state.firstName}
                handleChange={(event) => this.handleChange(event, "FirstName")}
              />
              <CustomFormControl
                type="text"
                topLabel="LastName"
                placeholder="LastName"
                value={this.state.lastName}
                handleChange={(event) => this.handleChange(event, "LastName")}
              />

              <CustomFormControl
                type="text"
                topLabel="UserName"
                placeholder="UserName"
                value={this.state.username}
                handleChange={(event) => this.handleChange(event, "UserName")}
              />

              <CustomFormControl
                type="text"
                topLabel="Mobile Number"
                placeholder="Contact"
                value={this.state.contact}
                handleChange={(event) => this.handleChange(event, "Contact")}
              />
            </Form>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 6 }}>
            <Button
              variant="danger"
              onClick={this.handleCancel}
              className="cancel-button"
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={this.addUser}
              className="add-button mx-2"
            >
              Add
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ AddUserListAction }, dispatch);
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddUser)
);
