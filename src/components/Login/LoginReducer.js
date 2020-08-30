import { LOGIN_SUCCESS_ACTION, LOGOUT_ACTION } from "../../redux/constants";

const INITIAL_STATE = {
  loggedInUser: {
    userName: "priyanka",
    password: "piyu",
  },
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_SUCCESS_ACTION:
      return { ...state, loggedInUser: action.loggedInUser };

    case LOGOUT_ACTION:
      return { ...state, loggedInUser: "" };

    default:
      return state;
  }
}
