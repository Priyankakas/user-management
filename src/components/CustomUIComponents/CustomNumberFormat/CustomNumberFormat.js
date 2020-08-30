import React from "react";
import PropTypes from "prop-types";

//library
import { FormattedInput } from "@buttercup/react-formatted-input";

//constants
import { USNUMBER_FORMAT } from "CONSTANTS/appConstants";

//Styles
import "./CustomNumberFormat.scss";

const CustomNumberFormat = (props) => {
  return (
    <div className="number-format-container">
      {props.placeholderTop && (
        <span
          className={
            props.placeholderTopClass
              ? "top-place-holder " + props.placeholderTopClass
              : "top-place-holder "
          }
        >
          {props.placeholderTop}
        </span>
      )}

      <FormattedInput
        className={
          props.halfWidth
            ? "half-width number-input"
            : "full-width number-input"
        }
        placeholder={props.placeholder}
        format={USNUMBER_FORMAT}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

CustomNumberFormat.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  halfWidth: PropTypes.bool,
  format: PropTypes.string,
};

CustomNumberFormat.defaultProp = {
  type: "",
  value: "",
  placeholder: "",
  onChange: () => {},
  halfWidth: false,
  format: "xxx-xxx-xxx",
};

export default CustomNumberFormat;
