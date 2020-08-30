import React from "react";
import { FormGroup, Label, Input, FormText } from "reactstrap";

// import { getTranslation } from "INTL/i18n";

//Styles
import "./CustomFormControl.scss";

class CustomFormControl extends React.Component {
  render() {
    return (
      <div className="custom-form-control">
        <FormGroup>
          {this.props.topLabel ? (
            <Label for="exampleEmail">{this.props.topLabel}</Label>
          ) : (
            ""
          )}
          <Input
            type={this.props.type}
            name={this.props.name}
            value={this.props.value}
            placeholder={this.props.placeholder}
            onChange={this.props.handleChange}
          />
          <FormText color="muted">{this.props.formText}</FormText>
        </FormGroup>
      </div>
    );
  }
}

export default CustomFormControl;
