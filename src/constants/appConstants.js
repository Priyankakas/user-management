export const LANGUAGE = {
  ENGLISH: {
    name: "en",
    value: "English",
  },
  SPANISH: {
    name: "es",
    value: "Spanish",
  },
};

export const THEMES = {
  BLUE: "blue",
  GREEN: "green",
};

export const supportedLanguages = {
  en: "English",
  es: "Español",
};

export const BIRTH_DATE_FORMAT = "MM/DD/YYYY";

export const SELECT = {
  key: "",
  label: "Select",
  value: 0,
};

export const TELEPHONE_FORMAT = "XXX-XXX-XXXX";

export const NUMBER_REGEX = "^[0-9]";

export const AGE_RANGE = {
  START: 18,
  END: 90,
};

export const USNUMBER_FORMAT = [
  { char: /\d/, repeat: 3 },
  { exactly: "-" },
  { char: /\d/, repeat: 3 },
  { exactly: "-" },
  { char: /\d/, repeat: 4 },
];
