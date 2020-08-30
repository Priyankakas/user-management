import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormGroup, Label } from "reactstrap";
import SelectSearch from "react-select-search";

//images
import selected_mark from "../../../resources/images/selected_mark.svg";

//Styles
import "./CustomSelectSearch.scss";

class CustomSelectSearch extends Component {
  renderOption(props, option, snapshot, className) {
    // console.log("%%%%", snapshot.selected);
    return (
      <button {...props} className={className} type="button">
        <span className="d-flex justify-content-between">
          <span>{option.name}</span>
          {snapshot.selected ? (
            <img src={selected_mark} alt={selected_mark} />
          ) : (
            ""
          )}
        </span>
      </button>
    );
  }
  render() {
    //Placeholder remove to show selected value
    return (
      <div className="custom-select-search">
        <FormGroup>
          <Label>{this.props.topLabel}</Label>
          <SelectSearch
            className="w-100"
            options={this.props.options}
            onChange={this.props.handleChange}
            value={this.props.value}
            renderOption={this.renderOption}
            search={this.props.search}
            // printOptions="always"
            placeholder={this.props.placeholder}
            disabled={this.props.disabled}
          />
        </FormGroup>
      </div>
    );
  }
}

CustomSelectSearch.propTypes = {
  options: PropTypes.array,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

CustomSelectSearch.defaultProp = {
  options: [],
  value: "",
  placeholder: "",
  disabled: false,
  onChange: () => {},
};

export default CustomSelectSearch;
