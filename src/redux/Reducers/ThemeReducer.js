import { THEMES } from "../../constants/appConstants";
import { SET_THEME, CLEAR_THEME } from "../constants";

const INITIAL_STATE = {
  theme: THEMES.GREEN,
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.theme };
    case CLEAR_THEME:
      return { ...state, theme: INITIAL_STATE.theme };

    default:
      return state;
  }
}
