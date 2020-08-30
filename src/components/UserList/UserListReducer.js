const INITIAL_STATE = {
  userList: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_USER_LIST_ACTION":
      return {
        ...state,
        userList: action.userList
      };

    case "EDIT_USER_LIST_ACTION":
      return {
        ...state,
        userList: state.userList.map(item =>
          item.id === action.id
            ? {
                ...item,
                firstName: action.firstName,
                lastName: action.lastName,
                user: action.user,
                number: action.number,
                kind: action.kind
              }
            : item
        )
      };

    default:
      return state;
  }
}
