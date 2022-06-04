module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': 'off',
    'no-tabs': 'off',
    'no-return-assign': 'off',
    'no-unused-vars': 'off',
    quotes: 'off',
    'arrow-parens': 'off',
    'object-shorthand': 'off',
    'no-undef': 'off',
    'no-else-return': 'off',
    'prefer-destructuring': 'off',
    'prefer-template': 'off',
    'no-shadow': 'off',
    'max-len': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
