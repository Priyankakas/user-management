import { LANGUAGE } from "../../constants/appConstants";
import { SET_LANGUAGE } from "../constants";

const INITIAL_STATE = {
  language: LANGUAGE.ENGLISH.name,
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, language: action.language };

    default:
      return state;
  }
}
