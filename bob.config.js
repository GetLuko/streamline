module.exports = {
  source: 'src',
  output: 'lib',
  exclude: ['src/**/*.spec.ts', 'src/**/*.spec.tsx'],
  targets: [
    'commonjs',
    'module',
    [
      'typescript',
      {
        project: 'tsconfig.build.json',
      },
    ],
  ],
};
