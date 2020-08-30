import React from "react";
import SelectSearch from "react-select-search";

//Translation
import { changeLanguage } from "../../../resources/i18n/i18n";

//Constants
import { LANGUAGE } from "../../../constants/appConstants";

// Assets
import selected_mark from "../../../resources/images/selected_mark.svg";

//Styles
import "./LanguageSelector.scss";

const options = [
  { name: "English", value: "en" },
  { name: "Espanol", value: "es" },
];

class LanguageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language:
        props.language === "en" ? LANGUAGE.ENGLISH.name : LANGUAGE.SPANISH.name,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      language:
        nextProps.language === "en"
          ? LANGUAGE.ENGLISH.name
          : LANGUAGE.SPANISH.name,
    };
  }

  toggleLanguage = (language) => {
    this.setState({
      language:
        language === "en" ? LANGUAGE.ENGLISH.name : LANGUAGE.SPANISH.name,
    });
    changeLanguage(language);
    this.props.handleLanguageChange(language);
  };

  renderOption(props, option, snapshot, className) {
    return (
      <button {...props} className={className} type="button">
        <span className="d-flex justify-content-between">
          <div>{option.name}</div>
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
    return (
      <div className="language-selector">
        <SelectSearch
          className="select-search"
          options={options}
          onChange={this.toggleLanguage}
          value={this.state.language}
          renderOption={this.renderOption}
          // printOptions="always"
        />
      </div>
    );
  }
}

export default LanguageSelector;
