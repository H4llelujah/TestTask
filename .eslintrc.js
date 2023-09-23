module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: 'eslint-config-airbnb',
    rules: {
        indent: 0,
        'linebreak-style': ['error', 'windows'],
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
  };
