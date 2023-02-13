// const { deprecatedElements } = require("utils/deprecatedElements");

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "react-app",
    "react-app/jest",
    "plugin:testing-library/react",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react"],
  rules: {
    // Legend: 0 = off, 1 = warn, 2 = error
    "prettier/prettier": 0,
    "curly": ["warn", "all"],
    "react/default-props-match-prop-types": 0,
    "react/jsx-no-useless-fragment": 0,
    "react/boolean-prop-naming": [
      0,
      {
        rule: "^(is|has|should|can|did)[A-Z]([A-Za-z0-9]?)+",
        message:
          "Boolean props like ({{ propName }}) need to start with one of the following auxiliary verbs: is, has, should, can, did.",
      },
    ],
    // "react/forbid-elements": [1, { forbid: deprecatedElements() }], -> Need to upgrade ESLint config to do this one this way.

    "react/function-component-definition": [
      0,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],

    "react/hook-use-state": [0, { allowDestructuredState: false }],
    "react/iframe-missing-sandbox": 0,
    "react/jsx-fragments": [0, "syntax"],
    "react/jsx-handler-names": 0,
    "react/jsx-key": [
      0,
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],
    "react/jsx-no-bind": [
      0,
      {
        ignoreDOMComponents: false,
        ignoreRefs: false,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
      },
    ],
    "react/jsx-no-constructed-context-values": 0,
    "react/jsx-no-leaked-render": [0, { validStrategies: ["coerce"] }],
    "react/jsx-no-target-blank": [
      0,
      {
        warnOnSpreadAttributes: true,
        forms: true,
      },
    ],
    "react/jsx-pascal-case": [
      0,
      {
        allowNamespace: true,
      },
    ],
    "react/jsx-sort-props": [
      0,
      {
        callbacksLast: true,
        shorthandLast: true,
        ignoreCase: true,
        noSortAlphabetically: true,
        reservedFirst: true,
      },
    ],
    "react/no-array-index-key": 0,
    "react/no-danger": 0,
    "react/no-invalid-html-attribute": 0, // Figure out more options here
    "react/no-this-in-sfc": 0,
    "react/no-unstable-nested-components": 0,
    // We should make this an error once the build runs.
    // Barring objections, I don't see a case where we'd want unused prop types.
    "react/no-unused-prop-types": 0,
    "react/prefer-es6-class": 0,
    "react/self-closing-comp": [
      0,
      {
        component: true,
        html: false,
      },
    ],
    "react/static-property-placement": 0,
    "react/style-prop-object": 0,
    "react/void-dom-elements-no-children": 0,
    "jsx-a11y/anchor-ambiguous-text": [
      0,
      {
        words: ["read more"],
      },
    ],
    "jsx-a11y/control-has-associated-label": 0,
    "jsx-a11y/lang": 0,
    "jsx-a11y/prefer-tag-over-role": 0,
    // The following rules from the "recommended" config have been lowered to "warning" for the sake of building the project.
    // Once we fix the issues, we'd want to turne the back to "error".
    "react/no-unescaped-entities": 0,
    "no-case-declarations": 0,
    "@typescript-eslint/ban-types": 0,
    "prefer-const": 0,
    "react/display-name": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-non-null-asserted-optional-chain": 0,
    "jsx-a11y/interactive-supports-focus": 0,
    "no-empty": 0,
    "jsx-a11y/no-static-element-interactions": 0,
  },
};
