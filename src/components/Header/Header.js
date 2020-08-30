import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { Button, Row } from "reactstrap";

//RouteConstants
import { ROUTES } from "constants/routeConstants";
import LanguageSelector from "components/CustomUIComponents/LanguageSelector/LanguageSelector";

//Actions
import setLanguageAction from "redux/Actions/LanguageAction";
import { logoutAction } from "components/Login/LoginAction";

//Translation
import { getTranslation } from "resources/i18n/i18n";

import "./Header.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigate: false,
      loggedInUser: {},
    };
  }

  logoutClick = () => {
    this.props.logoutAction();
    this.setState({
      navigate: true,
    });
    this.props.history.replace("/login");
    window.location.reload();
  };

  setLanguage = (language) => {
    this.props.setLanguageAction(language);
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
      <div className="headerStyle">
        <Row className="mx-0 justify-content-between">
          <LanguageSelector
            handleLanguageChange={this.setLanguage}
            language={this.props.language}
          />
          <div className="headerName">
            <label className="userName">
              {this.props.loggedInUser.userName}
            </label>
          </div>
        </Row>

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

          <Button type="button" onClick={this.logoutClick} color="link">
            Logout
          </Button>
        </nav>
      </div>
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
  return bindActionCreators({ logoutAction, setLanguageAction }, dispatch);
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
