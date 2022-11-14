module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "standard-with-typescript",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "single"], // Do we want to enforce a given style here? For now, leaving as a warning.
    "react/default-props-match-prop-types": ["error"],
    "react/jsx-no-useless-fragment": ["warning"],
  },
};
