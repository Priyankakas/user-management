import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/users")
      .then((resp) => {
        let data = resp.data;
        console.log("response", data);
        this.setState({
          users: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="Dashboard">
        Welcome To Dashboard
        {this.state.users.map((item) => {
          return (
            <div>
              {item.email}
              {item.first_name}
              {item.last_name}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (storeData) => {
  return {};
};

export default connect(mapStateToProps)(Dashboard);
