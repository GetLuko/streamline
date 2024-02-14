module.exports = {
  ignorePatterns: ['*.stories.tsx'],
  extends: ['@getluko/react-native'],
  rules: {
    '@getluko/react-native/lower-dash-case-test-id': 'error',
  },
  plugins: ['import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        'import/order': [
          'error',
          {
            groups: [
              ['builtin', 'external'],
              ['parent', 'sibling', 'index'],
            ],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
        'react/jsx-curly-brace-presence': [
          2,
          { props: 'never', children: 'always' },
        ],
      },
    },
  ],
};
