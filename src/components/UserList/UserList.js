import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Col, Modal, Row, Form } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import Avatar from "react-avatar";
import axios from "axios";

//Components
import CustomSelectSearch from "components/CustomUIComponents/CustomSelectSearch/CustomSelectSearch";
import CustomFormControl from "components/CustomUIComponents/CustomFormControl/CustomFormControl";

//Actions
import { EditUserListAction } from "./UserListAction";

//Routes
import { ROUTES } from "constants/routeConstants";

//Images
import adduser from "resources/images/ic_add_user.svg";

//Styles
import "./UserList.scss";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const options = [
  { name: "Admin", value: "admin" },
  { name: "Operator", value: "operator" },
];

class UserList extends Component {
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
      isEditing: false,
      userList: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/users")
      .then((resp) => {
        let data = resp.data;
        this.setState({
          userList: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("addeduser", this.props.location);

    let addedUser = this.props.location.addedUser;
    if (addedUser) {
      this.setState({
        userList: [...this.state.userList, addedUser],
      });
    }
  }

  initFormFields = () => {
    this.setState({
      img: "",
      username: "",
      firstName: "",
      lastName: "",
      contact: "",
      role: "",
    });
  };

  //Modal
  handleClose = () => {
    this.setState({ show: false });
  };

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

      case "userName":
        this.setState({
          userName: event.target.value,
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

  //Delete
  deleteUser = (row) => {
    let deleteID = row.id;
    let URL = "http://localhost:3001/users/" + deleteID;

    axios
      .delete(URL)
      .then((resp) => {
        let updatedList = this.state.userList.filter(
          (item) => item.id !== row.id
        );
        this.setState({
          userList: updatedList,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Edit Button and Fill Form with set Data
  editUser = (list) => {
    console.log("listedit", list);
    this.setState({
      show: true,
      isEditing: true,
      id: list.id,
      img: list.img,
      firstName: list.firstName,
      lastName: list.lastName,
      username: list.username,
      contact: list.contact,
      role: list.role,
    });
  };

  //Edit
  UpdateUserData = (id) => {
    let URL = "http://localhost:3001/users/" + id;

    axios
      .put(URL, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        contact: this.state.contact,
        role: this.state.role,
      })
      .then((resp) => {
        let updatedData = resp.data;

        let updatedList = this.state.userList.map((item) => {
          if (item.id === updatedData.id) {
            return {
              id: item.id,
              firstName: updatedData.firstName,
              lastName: updatedData.lastName,
              username: updatedData.username,
              contact: updatedData.contact,
              role: updatedData.role,
            };
          } else {
            return item;
          }
        });
        this.setState({
          userList: updatedList,
          show: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleAddUser = () => {
    this.props.history.push({
      pathname: ROUTES.ADDUSER,
      userList: this.state.userList,
    });
  };

  goToUserProfile = (row) => {
    this.props.history.push({
      pathname: ROUTES.USERDETAILS,
      userInfo: row,
    });
  };

  profile = (cell, row) => {
    let name = row.firstName + " " + row.lastName;
    return <Avatar name={name} maxInitials={2} round={true} />;
  };

  editFormatter = (cell, row) => {
    return (
      <Button
        className="btn btn-secondary edit-button"
        onClick={() => this.editUser(row)}
      >
        Edit
      </Button>
    );
  };

  deleteFormatter = (cell, row) => {
    return (
      <Button
        className="btn btn-danger delete-button"
        onClick={() => this.deleteUser(row)}
      >
        Delete
      </Button>
    );
  };

  firstNameFormatter = (cell, row) => {
    return (
      <span
        onClick={() => this.goToUserProfile(row)}
        className="cursor-pointer"
      >
        {cell}
      </span>
    );
  };

  render() {
    const { SearchBar } = Search;

    const columns = [
      {
        dataField: "id",
        text: "ID",
        sort: true,
      },
      {
        dataField: "img",
        text: "Profile",
        sort: false,
        formatter: this.profile,
      },
      {
        dataField: "firstName",
        text: "FirstName",
        sort: true,
        formatter: this.firstNameFormatter,
      },
      {
        dataField: "lastName",
        text: "LastName",
        sort: true,
      },
      {
        dataField: "username",
        text: "Username",
        sort: false,
      },
      {
        dataField: "contact",
        text: "Contact",
        sort: false,
      },
      {
        dataField: "role",
        text: "Role",
        sort: false,
      },
      {
        dataField: "delete",
        text: "Delete",
        sort: false,
        formatter: this.deleteFormatter,
      },
      {
        dataField: "edit",
        text: "Edit",
        sort: false,
        formatter: this.editFormatter,
      },
    ];

    return (
      <div className="user-list">
        <Col xs={12} className="noPadding">
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Col xs={12} className="noPadding content-body">
                <Col xs={6} className="noPadding">
                  <Avatar
                    name={this.state.img}
                    maxInitials={2}
                    round={true}
                    className="mb-3"
                  />
                  <Col xs={6} className="noPadding">
                    <CustomSelectSearch
                      topLabel={"Role"}
                      options={options}
                      value={this.state.role}
                      handleChange={this.handleSelect}
                      placeholder={"Select"}
                    />
                  </Col>
                </Col>
                <Col xs={6} className="noPadding">
                  <Form>
                    <CustomFormControl
                      type="text"
                      topLabel="FirstName"
                      placeholder="FirstName"
                      value={this.state.firstName}
                      handleChange={(event) =>
                        this.handleChange(event, "FirstName")
                      }
                    />
                    <CustomFormControl
                      type="text"
                      topLabel="LastName"
                      placeholder="LastName"
                      value={this.state.lastName}
                      handleChange={(event) =>
                        this.handleChange(event, "LastName")
                      }
                    />

                    <CustomFormControl
                      type="text"
                      topLabel="UserName"
                      placeholder="UserName"
                      value={this.state.username}
                      handleChange={(event) =>
                        this.handleChange(event, "UserName")
                      }
                    />

                    <CustomFormControl
                      type="text"
                      topLabel="Mobile Number"
                      placeholder="Contact"
                      value={this.state.contact}
                      handleChange={(event) =>
                        this.handleChange(event, "Contact")
                      }
                    />
                  </Form>
                </Col>
              </Col>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={this.handleClose}>
                Cancel
              </Button>

              <Button
                variant="dark"
                onClick={() => this.UpdateUserData(this.state.id)}
                className="update-button"
              >
                Update
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>

        <Col xs={12} className="">
          <ToolkitProvider
            keyField="id"
            data={this.state.userList}
            columns={columns}
            search
          >
            {(props) => (
              <div>
                <Row className="justify-content-end mx-2 my-3">
                  <SearchBar {...props.searchProps} />
                  <Button className="add-button" onClick={this.handleAddUser}>
                    <img src={adduser} alt="addIcon" />
                    Add User
                  </Button>
                </Row>

                <BootstrapTable {...props.baseProps} />
              </div>
            )}
          </ToolkitProvider>
        </Col>
      </div>
    );
  }
}

function mapStateToProps(storeData) {
  return {
    userList: storeData.userListReducer.userList,
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      EditUserListAction: EditUserListAction,
    },
    dispatch
  );
}

export default withRouter(
  connect(
    mapStateToProps,
    matchDispatchToProps
  )(UserList)
);
