/**
 * Component Generator
 */

const componentExists = require("../utils/componentExists");

module.exports = {
  description: "Add a container",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Test",
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? "A component or container with this name already exists"
            : true;
        }
        return "The name is required";
      },
    },
    {
      type: "confirm",
      name: "wantStyle",
      default: true,
      message: "Does it have styling?",
    },
    {
      type: "confirm",
      name: "wantMessages",
      default: true,
      message:
        "Do you want i18n getTranslation (i.e. will this container use text)?",
    },
    {
      type: "confirm",
      name: "wantRedux",
      default: true,
      message: "Does it require Redux connection?",
    },
    {
      type: "confirm",
      name: "wantConstant",
      default: true,
      message: "Does it require Constant file?",
    },
  ],
  actions: (data) => {
    // add container and test file
    const actions = [
      {
        type: "add",
        path: "../src/components/{{name}}/{{name}}Container.js",
        templateFile: "./container/es6.js.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../src/components/{{name}}/{{name}}Container.test.js",
        templateFile: "./container/test.js.hbs",
        abortOnFail: true,
      },
    ];

    // if required a CSS file, add styles.scss
    if (data.wantStyle) {
      actions.push({
        type: "add",
        path: "../src/components/{{name}}/{{name}}.scss",
        templateFile: "./container/styles.scss.hbs",
        abortOnFail: true,
      });
    }

    // add component and test file
    if (data.wantRedux) {
      actions.push({
        type: "add",
        path: "../src/components/{{name}}/{{name}}.js",
        templateFile: "./container/component.js.hbs",
        abortOnFail: true,
      });
      actions.push({
        type: "add",
        path: "../src/components/{{name}}/{{name}}.test.js",
        templateFile: "./container/componentTest.js.hbs",
        abortOnFail: true,
      });
    }

    // if required a constant file
    if (data.wantConstant) {
      actions.push({
        type: "add",
        path: "../src/components/{{name}}/{{name}}Constant.js",
        templateFile: "./container/constant.js.hbs",
        abortOnFail: true,
      });
    }
    return actions;
  },
};
