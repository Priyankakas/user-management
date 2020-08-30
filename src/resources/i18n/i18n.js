// https://react.i18next.com/legacy-v9/step-by-step-guide

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { store } from "../../redux/store";

//Translation resources
import english from "../i18n/en";
import spanish from "../i18n/es";

//Constants
import { LANGUAGE } from "../../constants/appConstants";

// the translations
const resources = {
  en: {
    translation: english,
  },
  es: {
    translation: spanish,
  },
};

//function that will call when user want to change the language
export const changeLanguage = (lang) => {
  //use language from param/ use language from reducer
  let language =
    lang || store.getState().LanguageReducer.language || LANGUAGE.ENGLISH.name;

  //pass language to i18 changelanugae function
  i18n.changeLanguage(language);
};

//function to convert message in expected language
export const getTranslation = (key, interpolation) => {
  return i18n.t(key, interpolation);
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: LANGUAGE.ENGLISH.name,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
