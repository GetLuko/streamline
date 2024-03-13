'use strict';
exports.__esModule = true;
const Config = {
  plugins: ['import'],
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  rules: {
    /**
     * We don't enforce the use of default exports.
     * Having named exports provides better IDE support with:
     * - auto importing correctly
     * - better following of imports
     */
    'import/prefer-default-export': 'off',
    // Enforce a convention in module import order
    'import/order': [
      'error',
      {
        'pathGroups': [
          {
            pattern: '@*/**',
            group: 'parent',
            position: 'before',
          },
        ],
        'groups': [['builtin', 'external'], ['parent'], ['sibling', 'index']],
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    // Disallow duplicate module imports
    'no-duplicate-imports': 2,
  },
};
module.exports = Config;
