import {
  SET_USER_LIST,
  CLEAR_USER_LIST,
  ADD_USER,
  GET_USER,
} from "redux/constants";

const INITIAL_STATE = {
  userList: [],
  addUser: {},
  getUser: {},
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER_LIST:
      return { ...state, userList: action.userList };

    case CLEAR_USER_LIST:
      return { ...state, userList: INITIAL_STATE.userList };

    case ADD_USER:
      return { ...state, addUser: action.addUser };

    case GET_USER:
      return { ...state, getUser: action.getUser };

    default:
      return state;
  }
}
