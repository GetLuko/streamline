import '@testing-library/jest-native/extend-expect';

import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalAny: any = global;
globalAny.ReanimatedDataMock = {
  now: () => 0,
};

jest.mock('expo-linear-gradient', () => ({
  LinearGradient: () => null,
}));
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);
