module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "rules": {
    // enable additional rules
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    'immutable/no-mutation': 2,

    // override configuration set by extending "eslint:recommended"
    "no-empty": "warn",
    "no-cond-assign": ["error", "always"],

    // disable rules from base configurations
    "for-direction": "off",
    "react/prop-types": "off"
  },
  plugins: [
    'immutable'
  ],
  "parser": "@babel/eslint-parser",
  "env": {
    "browser": true
  }
}