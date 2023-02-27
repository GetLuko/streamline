import '@testing-library/jest-native/extend-expect';

jest.mock('react-native-ama/dist/commonjs/internal/logger.js', () => {
  return {
    getContrastCheckerMaxDepth: () => 5,
  };
});
