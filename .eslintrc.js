const path = require('path');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['jest', 'import'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    'max-len': ['error', {
      'code': 140,
      'ignoreTrailingComments': true,
      'ignoreUrls': true,
    }],
    'import/prefer-default-export': 'off'
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
