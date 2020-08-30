import React, { Component } from "react";

class Contact extends Component {
  onNavigateDashBoard = () => {
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div className="Contact">
        Contact Us Please !!!!
        <br />
        <br />
        {/* <p>User Id: &nbsp;{this.props.match.params.id}</p> */}
        <button onClick={this.onNavigateDashBoard} className="btn btn-primary">
          Go To Dashboard
        </button>
      </div>
    );
  }
}
export default Contact;
