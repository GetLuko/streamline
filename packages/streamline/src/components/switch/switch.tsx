import React from 'react';
import { Platform, Switch as SwitchNative } from 'react-native';

import { Colors, useStreamlineTheme } from '../../theme';

export interface SwitchProps {
  action: (value: boolean) => void;
  value: boolean;
  disabled?: boolean;
  testID?: string;
}

export function Switch({ action, value, disabled, testID }: SwitchProps) {
  const state = disabled ? 'disabled' : 'enabled';
  const theme = useStreamlineTheme();
  const colors = getColorMapping(theme.colors)?.[state];
  return (
    <SwitchNative
      accessibilityRole="switch"
      value={value}
      disabled={disabled}
      onValueChange={action}
      trackColor={{ false: colors?.inactiveTrack, true: colors?.activeTrack }}
      thumbColor={value ? colors?.activeThumb : colors?.inactiveThumb}
      ios_backgroundColor={colors?.inactiveTrack}
      testID={testID}
    />
  );
}

export default Switch;

const getColorMapping = (colors: Colors) =>
  Platform.select({
    android: {
      enabled: {
        activeTrack: colors.BLUKO_400,
        activeThumb: colors.BLUKO_500,
        inactiveTrack: colors.GREY_400,
        inactiveThumb: colors.PURE_WHITE_1000,
      },
      disabled: {
        activeTrack: colors.BLUKO_100,
        activeThumb: colors.BLUKO_200,
        inactiveTrack: colors.GREY_200,
        inactiveThumb: colors.GREY_100,
      },
    },
    ios: {
      enabled: {
        activeTrack: colors.BLUKO_500,
        activeThumb: colors.PURE_WHITE_1000,
        inactiveTrack: colors.GREY_300,
        inactiveThumb: colors.PURE_WHITE_1000,
      },
      disabled: {
        activeTrack: colors.BLUKO_200,
        activeThumb: colors.PURE_WHITE_1000,
        inactiveTrack: colors.GREY_200,
        inactiveThumb: colors.PURE_WHITE_1000,
      },
    },
  });
