import moment from "moment";
import { format } from "@buttercup/react-formatted-input";

//Constants
import { USNUMBER_FORMAT } from "../constants/appConstants";

export default class Utility {
  static getFormattedTelephoneNumber(phoneNumber) {
    const { formatted } = format(phoneNumber, USNUMBER_FORMAT);
    return formatted;
  }

  static getUnformattedTelephoneNumber(phoneNumber) {
    return phoneNumber.replace(/-/g, "");
  }
}
