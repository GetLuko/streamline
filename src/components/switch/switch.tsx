import React from 'react';
import { Switch as SwitchNative } from 'react-native';

import { useStreamlineTheme } from '../../theme';

import { getColorMapping } from './switch.utils';

export interface SwitchProps {
  onChange: (value: boolean) => void | Promise<void>;
  value: boolean;
  isDisabled?: boolean;
  testID?: string;
}

export const Switch = ({
  onChange,
  value,
  isDisabled,
  testID,
}: SwitchProps) => {
  const state = isDisabled ? 'disabled' : 'enabled';
  const theme = useStreamlineTheme();
  const colors = getColorMapping(theme.colors)?.[state];
  return (
    <SwitchNative
      accessibilityRole="switch"
      value={value}
      disabled={isDisabled}
      onValueChange={onChange}
      trackColor={{ false: colors?.inactiveTrack, true: colors?.activeTrack }}
      thumbColor={value ? colors?.activeThumb : colors?.inactiveThumb}
      ios_backgroundColor={colors?.inactiveTrack}
      testID={testID}
    />
  );
};

export default Switch;
