import { LOGIN_SUCCESS_ACTION, LOGOUT_ACTION } from "redux/constants";

export const LoginAction = (loggedInUser) => {
  return {
    type: LOGIN_SUCCESS_ACTION,
    loggedInUser: loggedInUser,
  };
};

export const logoutAction = () => (dispatch) => {
  dispatch({
    type: LOGOUT_ACTION,
  });
};
