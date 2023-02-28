import '@testing-library/jest-native/extend-expect';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalAny: any = global;
globalAny.ReanimatedDataMock = {
  now: () => 0,
};
