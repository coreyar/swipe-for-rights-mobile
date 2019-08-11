module.exports = {
  "extends": [
    "airbnb",
    "plugin:flowtype/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react",
  ],
  "env": {
    "mocha": true,
    "node": true,
    "jest": true,
    "jasmine": true
  },
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "react-native",
    "babel",
    "flowtype",
    "flowtype-errors"
  ],
  "rules": {
    "import/no-cycle": "off",
    "class-methods-use-this": 2,
    "camelcase": "off",
    "import/no-named-as-default": "off",
    "import/order": [2, { "groups": [["builtin", "external", "internal"]] }],
    "operator-linebreak": 2,
    "react/sort-comp": 2,
    "react/jsx-one-expression-per-line": 2,
    "object-curly-newline": 2,
    "react/destructuring-assignment": 2,
    "lines-between-class-members": 2,
    "prefer-destructuring": 2,
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"]}],
    "semi": 0,
    "max-len": [1, 400],
    "max-lines": [1, 400],
    "max-lines-per-function": [1, 150],
    "global-require": 0,
    "react/jsx-filename-extension": ["off"],
    "no-underscore-dangle": ["off"],
    "react/jsx-no-bind": [1],
    "react/no-unescaped-entities": ["off"],
    "no-console": [1],
    "no-unused-vars": 2,
    "no-useless-escape": ["off"],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "flowtype-errors/show-errors": 2,
    "flowtype-errors/show-warnings": 1,
    "react/prefer-stateless-function": [1]
  },
  "globals": {
    "__DEV__": true,
    "navigator": true,
    "XMLHttpRequest": true,
    "window": true
  },
  "settings": {
    "import/resolver": {
      "babel-module": {}
    },
  }
}
