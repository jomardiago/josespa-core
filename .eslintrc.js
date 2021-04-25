const path = require("path");

module.exports = {
  extends: ["important-stuff", "plugin:prettier/recommended"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    babelOptions: {
      configFile: path.join(__dirname, "babel.config.json"),
    }
  }
};
