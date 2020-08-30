import React from "react";
import SelectSearch from "react-select-search";

//Translation
import { changeLanguage } from "../../../resources/i18n/i18n";

//Constants
import { LANGUAGE } from "../../../constants/appConstants";

// Assets
// import down_arrow from "ASSETS/down_arrow.svg";
// import up_arrow from "ASSETS/up_arrow.svg";
import en from "../../../resources/images/en_flag.png";
import es from "../../../resources/images/es_flag.png";
import selected_mark from "../../../resources/images/selected_mark.svg";

// import { getTranslation } from "../../../resources/i18n/i18n";

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
          <div>
            <span className="pr-2">
              {option.value === "en" ? (
                <img src={en} alt="english" />
              ) : (
                <img src={es} alt="spanish" />
              )}
            </span>

            {option.name}
          </div>
          {snapshot.selected ? (
            <img src={selected_mark} alt={selected_mark} />
          ) : (
            ""
          )}
        </span>
      </button>
    );
  }

  renderValue = (valueProps, snapshot, className) => {
    // const { value } = snapshot;

    return (
      <input
        {...valueProps}
        className={className}
        // style={style}
        value={snapshot.displayValue}
      />
    );
  };

  render() {
    return (
      <div className="languageSelector">
        <SelectSearch
          className="select-search"
          options={options}
          onChange={this.toggleLanguage}
          value={this.state.language}
          renderOption={this.renderOption}
          // renderValue={this.renderValue}
          // printOptions="always"
        />
      </div>
    );
  }
}

export default LanguageSelector;
