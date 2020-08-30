import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

//Components reducer
import LoginReducer from "../../components/Login/LoginReducer";

import LanguageReducer from "../Reducers/LanguageReducer";
import UserReducer from "../Reducers/UserReducer";
import ThemeReducer from "../Reducers/ThemeReducer";

const rootReducer = combineReducers({
  routerReducer,
  LanguageReducer: LanguageReducer,
  ThemeReducer: ThemeReducer,
  LoginReducer: LoginReducer,
  userReducer: UserReducer,
});

export default rootReducer;
