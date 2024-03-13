import React from 'react';
import { Switch as SwitchNative } from 'react-native';

import { useStreamlineTheme } from '../../theme';

import { getColorMapping } from './switch.utils';

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
