import {
  ADD_USER_LIST_ACTION,
  DELETE_USER,
  EDIT_USER_LIST_ACTION,
} from "../../redux/constants";

export function AddUserListAction(userList) {
  console.log("ADD_ACTION", userList);
  return {
    type: ADD_USER_LIST_ACTION,
    userList: userList,
  };
}

export function DeleteUserAction(userId) {
  console.log("DELETE_ACTION", userId);
  return {
    type: DELETE_USER,
    userList: userId,
  };
}

export function EditUserListAction(userList) {
  console.log("EDIT_ACTION", userList);
  return {
    type: EDIT_USER_LIST_ACTION,
    userList: userList,
  };
}
