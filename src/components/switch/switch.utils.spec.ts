import { Platform } from 'react-native';

import { getColorMapping } from './switch.utils';
import { baseTheme } from '../../theme';

describe('getColorMapping', () => {
  it('should return the correct color mapping for iOS enabled state', () => {
    const expectedMapping = {
      activeTrack: baseTheme.colors.BLUKO_500,
      activeThumb: baseTheme.colors.PURE_WHITE_1000,
      inactiveTrack: baseTheme.colors.GREY_300,
      inactiveThumb: baseTheme.colors.PURE_WHITE_1000,
    };

    const result = getColorMapping(baseTheme.colors);

    expect(result?.enabled).toEqual(expectedMapping);
  });

  it('should return the correct color mapping for iOS disabled state', () => {
    const expectedMapping = {
      activeTrack: baseTheme.colors.BLUKO_200,
      activeThumb: baseTheme.colors.PURE_WHITE_1000,
      inactiveTrack: baseTheme.colors.GREY_200,
      inactiveThumb: baseTheme.colors.PURE_WHITE_1000,
    };

    const result = getColorMapping(baseTheme.colors);

    expect(result?.disabled).toEqual(expectedMapping);
  });
  it('should return the correct color mapping for Android enabled state', () => {
    // Given
    jest
      .spyOn(Platform, 'select')
      .mockImplementation((specifics) => specifics.android);
    const expectedMapping = {
      activeTrack: baseTheme.colors.BLUKO_400,
      activeThumb: baseTheme.colors.BLUKO_500,
      inactiveTrack: baseTheme.colors.GREY_400,
      inactiveThumb: baseTheme.colors.PURE_WHITE_1000,
    };
    // When
    const result = getColorMapping(baseTheme.colors);
    // Then
    expect(result?.enabled).toEqual(expectedMapping);
  });

  it('should return the correct color mapping for Android disabled state', () => {
    jest
      .spyOn(Platform, 'select')
      .mockImplementation((specifics) => specifics.android);
    // Given
    const expectedMapping = {
      activeTrack: baseTheme.colors.BLUKO_100,
      activeThumb: baseTheme.colors.BLUKO_200,
      inactiveTrack: baseTheme.colors.GREY_200,
      inactiveThumb: baseTheme.colors.GREY_100,
    };
    // When
    const result = getColorMapping(baseTheme.colors);
    // Then
    expect(result?.disabled).toEqual(expectedMapping);
  });
});
