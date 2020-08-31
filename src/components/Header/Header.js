import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

//RouteConstants
import { ROUTES } from "constants/routeConstants";

//Actions
import { logoutAction } from "components/Login/LoginAction";

//Translation
import { getTranslation } from "resources/i18n/i18n";
import routes from "routes";

import "./Header.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: {},
      isOpen: false,
    };
  }

  componentDidMount() {
    console.log("header", this.props.language);
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  logoutClick = () => {
    this.props.logoutAction();
    this.props.history.replace("/login");
  };

  SideBarMenuItems = () => {
    let MenuItems = {
      DASHBOARD: {
        key: 1,
        to: ROUTES.DASHBOARD,
        title: getTranslation("Dashboard"),
        // icon: Dashboard,
        // activeIcon: Dashboard,
        isActive: null,
      },
      CONTACT: {
        key: 2,
        to: ROUTES.CONTACT,
        title: getTranslation("Contact"),
        isActive: null,
      },
      USER_LIST: {
        key: 3,
        to: ROUTES.USERLIST,
        title: getTranslation("UserList"),
        isActive: null,
      },
      USER_DETAILS: {
        key: 4,
        to: ROUTES.USERDETAILS,
        title: getTranslation("UserDetails"),
        isActive: null,
      },
    };
    return MenuItems;
  };

  render() {
    let menuLinks = [];
    let allmenuLinks = this.SideBarMenuItems();
    //Covert to array of objects
    Object.keys(allmenuLinks).forEach(function(key) {
      menuLinks.push(allmenuLinks[key]);
    });

    return (
      <Router>
        <div className="header">
          <div className="navbar-background">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between">
              <ul className="navbar-nav">
                {menuLinks.map((item, index) => {
                  return (
                    <li key={index}>
                      <NavLink
                        to={item.to}
                        className="nav-link"
                        activeClassName="active-nav"
                        activeStyle={{ color: "red" }}
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>

              <Dropdown isOpen={this.state.isOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                  {this.props.loggedInUser.userName}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={this.logoutClick}>Logout</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </nav>
          </div>

          <Switch>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (storeData) => {
  return {
    language: storeData.LanguageReducer.language,
    loggedInUser: storeData.LoginReducer.loggedInUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ logoutAction }, dispatch);
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
