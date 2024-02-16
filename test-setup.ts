import '@testing-library/jest-native/extend-expect';

import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

const globalAny: any = global;
globalAny.ReanimatedDataMock = {
  now: () => 0,
};

jest.mock('expo-linear-gradient', () => ({
  LinearGradient: () => null,
}));
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);
