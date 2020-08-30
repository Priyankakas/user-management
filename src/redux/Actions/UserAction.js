import { ADD_USER, DELETE_USER, GET_USER } from "redux/constants";

export function addUserAction(addUser) {
  console.log("ADD_ACTION", addUser);
  return {
    type: ADD_USER,
    addUser: addUser,
  };
}

export const getUserAction = (userData) => {
  console.log("GET_USER", userData);
  return {
    type: GET_USER,
    getUser: userData,
  };
};

export function deleteUserAction(userId) {
  console.log("DELETE_ACTION", userId);
  return {
    type: DELETE_USER,
    userList: userId,
  };
}
