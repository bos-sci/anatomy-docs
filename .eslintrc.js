import { deprecatedElements } from "utils/deprecatedElements";

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // Legend: 0 = off, 1 = warning, 2 = error
    "react/default-props-match-prop-types": 2,
    "react/jsx-no-useless-fragment": 1,
    "react/boolean-prop-naming": [
      1,
      {
        rule: "^(is|has|should|can|did)[A-Z]([A-Za-z0-9]?)+",
        message:
          "Boolean props like ({{ propName }}) need to start with one of the following auxiliary verbs: is, has, should, can, did.",
      },
    ],
    "react/forbid-elements": [1, { forbid: deprecatedElements() }],

    "react/function-component-definition": [
      1,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],

    "react/hook-use-state": [1, { allowDestructuredState: false }],
    "react/iframe-missing-sandbox": 1,
  },
};
