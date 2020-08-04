module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'react-hooks', 'prettier'],
  settings: {
    'import/core-modules': ['react']
  },
  env: {
    browser: true
  },
  rules: {
    'prettier/prettier': ['error', { 'singleQuote': true }],
    'react/no-danger': 0,
    'import/no-unresolved': 0,
    'react/sort-comp': 0,
    'no-console': 0,
    'import/no-extraneous-dependencies': 0,
    'lines-between-class-members': 0,
    'prefer-destructuring': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-props-no-spreading': 0
  }
};
