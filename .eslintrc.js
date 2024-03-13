module.exports = {
  root: true,
  extends: ['@getluko/react-native', './eslint/rules/import.js'],
  overrides: [
    {
      files: ['sandbox/**/*'],
      rules: {
        'no-console': 'off',
        'react/jsx-key': 'off',
      },
    },
  ],
};
