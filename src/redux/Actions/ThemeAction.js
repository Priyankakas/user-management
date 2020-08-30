import { SET_THEME } from "../constants";

export default function setThemeAction(theme) {
  return {
    type: SET_THEME,
    theme: theme,
  };
}
