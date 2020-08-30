import React, { Component } from "react";

import Switch from "react-switch";

import { getTranslation } from "INTL/i18n";

import "./CustomSwitch.scss";

export default class CustomSwitch extends Component {
  constructor() {
    super();
    this.state = { checked: false };
  }
  handleChange = (checked) => {
    this.setState({ checked });
  };

  render() {
    const { checked } = this.state;
    return (
      <div className="custom-switch-container d-flex">
        <label className={!checked ? "active-color" : "inactive-color"}>
          {getTranslation("Inactive")}
        </label>
        <Switch
          onChange={this.handleChange}
          checked={this.state.checked}
          className="react-switch px-2"
          onColor="#23AC66"
          offColor="#ABAFB1"
          checkedIcon={false}
          uncheckedIcon={false}
          height={22}
          width={48}
        />
        <label className={checked ? "active-color" : "inactive-color"}>
          {getTranslation("Active")}
        </label>
      </div>
    );
  }
}
