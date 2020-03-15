module.exports = {
  root: true,
  extends: ["react-app", '@react-native-community', "plugin:prettier/recommended"],
  plugins: ['react-hooks', "prettier"],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    "padding-line-between-statements": [
      "error",
      {blankLine: "always", prev: ["const", "let", "var"], next: "*"},
      {blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]},
    ],
    "prettier/prettier": "error",
    "newline-before-return": ["error"],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
      },
    ],
  },
};
