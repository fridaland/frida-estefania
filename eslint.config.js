const react = require('eslint-plugin-react');

module.exports = [
  {
    files: ['src/**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react,
      'react-hooks': require('eslint-plugin-react-hooks'),
      'jsx-a11y': require('eslint-plugin-jsx-a11y'),
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/no-autofocus': 'warn',
      'no-console': 'warn',
      'eqeqeq': ['error', 'always'],
      'curly': 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'indent': ['error', 2],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    ignores: ["package.json", "package-lock.json", "node_modules/"],
  },
];
