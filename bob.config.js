module.exports = {
  source: 'src',
  output: 'lib',
  exclude: ['src/**/*.spec.ts', 'src/**/*.spec.tsx'],
  targets: [
    ['module', { configFile: true }],
    [
      'typescript',
      {
        project: 'tsconfig.build.json',
      },
    ],
  ],
};
