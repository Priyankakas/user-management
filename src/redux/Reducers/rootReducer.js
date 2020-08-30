import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

//Components reducer
import LanguageReducer from "../../redux/Reducers/LanguageReducer";
import LoginReducer from "../../components/Login/LoginReducer";
import UserListReducer from "../../components/UserList/UserListReducer";
import ThemeReducer from "../../redux/Reducers/ThemeReducer";

const rootReducer = combineReducers({
  routerReducer,
  LanguageReducer: LanguageReducer,
  ThemeReducer: ThemeReducer,
  LoginReducer: LoginReducer,
  userListReducer: UserListReducer,
});

export default rootReducer;
