/**
 * Component Generator
 */

const componentExists = require("../utils/componentExists");

module.exports = {
  description: "Add a component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Test",
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? "A component or container with this name already exists"
            : true;
        }

        return "The name is required";
      }
    },
    {
      type: "confirm",
      name: "wantStyle",
      default: true,
      message: "Does it have styling?"
    },
    {
      type: "confirm",
      name: "wantMessages",
      default: true,
      message: "Do you want i18n getTranslation (i.e. will this component use text)?"
    },
    {
      type: "confirm",
      name: "wantRedux",
      default: true,
      message: "Does it require Redux connection?"
    }
  ],
  actions: data => {
    const actions = [
      {
        type: "add",
        path: "../src/components/{{name}}/{{name}}.js",
        templateFile: "./component/es6.js.hbs",
        abortOnFail: true
      },
      {
        type: "add",
        path: "../src/components/{{name}}/{{name}}.test.js",
        templateFile: "./component/test.js.hbs",
        abortOnFail: true
      }
    ];

    // If they want a CSS file, add styles.scss
    if (data.wantStyle) {
      actions.push({
        type: "add",
        path: "../src/components/{{name}}/{{name}}.scss",
        templateFile: "./component/styles.scss.hbs",
        abortOnFail: true
      });
    }

    return actions;
  }
};
