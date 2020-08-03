module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'react-hooks', 'prettier'],
  settings: {
    'import/core-modules': ['react'],
  },
  env: {
    browser: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'react/no-danger': 0,
    'import/no-unresolved': 0,
    'react/sort-comp': 0,
    'no-console': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-props-no-spreading': 0,
  },
};
