import '@testing-library/jest-native/extend-expect';

import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

const globalAny: any = global;
globalAny.ReanimatedDataMock = {
  now: () => 0,
};

jest.mock('expo-linear-gradient', () => ({
  LinearGradient: () => null,
}));
jest.mock('expo-image', () => ({
  Image: () => null,
}));
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);
jest.mock('react-native-ama/dist/commonjs/internal/logger.js', () => {
  return {
    getContrastCheckerMaxDepth: () => 5,
    shouldIgnoreContrastCheckForDisabledElement: () => true,
  };
});
