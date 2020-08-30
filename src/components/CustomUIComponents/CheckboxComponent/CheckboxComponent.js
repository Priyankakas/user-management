import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

//Assets
import checkbox from "ASSETS/checkbox.svg";
import checkedbox from "ASSETS/checkedbox.svg";

//Styles
import "./CheckboxComponent.scss";

export default class CheckboxComponent extends Component {
  render() {
    return (
      <div className="checkbox-component">
        {this.props.checked ? (
          <img src={checkedbox} onClick={this.props.onChange} alt="selected" />
        ) : (
          <img src={checkbox} onClick={this.props.onChange} alt="unselected" />
        )}
        <Form.Check
          onChange={
            this.props.disabled === false
              ? (e) => {
                  this.props.onChange(e);
                }
              : () => {}
          }
          className={this.props.labelClass}
          checked={this.props.checked}
          inline
          label={this.props.label}
          disabled={this.props.disabled}
        />
      </div>
    );
  }
}

CheckboxComponent.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

CheckboxComponent.defaultProp = {
  onChange: () => {},
  checked: false,
};
