import React, { Component } from "react";
import { Col, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Avatar from "react-avatar";

//use withRouter to access history,location object

//constants
import { ROUTES } from "constants/routeConstants";

//styles
import "./UserDetails.scss";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: [],
    };
  }

  componentDidMount() {
    console.log(this.props.location.userInfo);
    if (this.props.location.userInfo) {
      this.setState({
        userDetails: this.props.location.userInfo,
      });
    }
  }

  CancelBack = () => {
    this.props.history.push(ROUTES.USERLIST);
  };

  render() {
    let { userDetails } = this.state;
    return (
      <div className="Details">
        <div className="userDetails">
          <Col xs={12} className="userImg">
            <Avatar name={userDetails.img} maxInitials={2} round={true} />
          </Col>
          <Col xs={12} className="d-flex">
            <Col xs={{ span: 3, offset: 3 }} className="">
              <div>
                <div className="label">FirstName</div>
                {userDetails.firstName}
              </div>
              <div>
                <div className="label">User</div>
                {userDetails.userName}
              </div>
              <div>
                <div className="label">Kind </div>
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

export default withRouter(UserDetails);
