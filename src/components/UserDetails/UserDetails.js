import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import Avatar from "react-avatar";
import { Col, Button } from "react-bootstrap";

//use withRouter to access history,location object

//constants
import { ROUTES } from "constants/routeConstants";

//styles
import "./UserDetails.scss";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: this.props.userDetails,
    };
  }

  CancelBack = () => {
    this.props.history.push(ROUTES.USERLIST);
  };

  render() {
    let { userDetails } = this.state;
    let name = userDetails.firstName + " " + userDetails.lastName;
    return (
      <div className="Details">
        <div className="userDetails">
          <Col xs={12} className="userImg">
            <Avatar name={name} maxInitials={2} round={true} />
          </Col>
          <Col xs={12} className="d-flex">
            <Col xs={{ span: 3, offset: 3 }} className="">
              <div>
                <div className="label">FirstName</div>
                {userDetails.firstName}
              </div>
              <div>
                <div className="label">Username</div>
                {userDetails.username}
              </div>
              <div>
                <div className="label">Role</div>
                {userDetails.role}
              </div>
            </Col>
            <Col xs={3} className="">
              <div>
                <div className="label">LastName </div>
                {userDetails.lastName}
              </div>
              <div>
                <div className="label">Mobile Number</div>
                {userDetails.contact}
              </div>
            </Col>
          </Col>
        </div>
        <Col xs={12} className="CancelBack">
          <Button className="bg-danger" onClick={this.CancelBack}>
            Cancel
          </Button>
        </Col>
      </div>
    );
  }
}

const mapStateToProps = (storeData) => {
  return {
    userDetails: storeData.userReducer.getUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserDetails)
);
