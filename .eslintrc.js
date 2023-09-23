module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: 'eslint-config-airbnb',
    rules: {
        indent: 0,
        'linebreak-style': ['error', 'windows'],
        'import/no-extraneous-dependencies': 0,
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    ignorePatterns: ['dist/'],
  };
