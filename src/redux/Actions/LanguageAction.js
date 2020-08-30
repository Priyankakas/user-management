import { SET_LANGUAGE } from "../constants";

export default function setLanguageAction(language) {
  return {
    type: SET_LANGUAGE,
    language: language,
  };
}
