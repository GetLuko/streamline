module.exports = {
  displayName: 'streamline',
  preset: 'react-native',
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html', 'tsx', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  moduleNameMapper: {
    '\\.svg$': '@nrwl/react-native/plugins/jest/svg-mock',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!react-native|react-native-reanimated|@react-native-community)/',
  ],
};
