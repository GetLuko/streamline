import { Box, GeneratedRegularIcons } from '@getluko/streamline';
import { Icon, IconProps } from '@getluko/streamline';
import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';

const iconNames = [
  ...Object.keys(GeneratedRegularIcons),
] as IconProps['iconName'][];

export const IconsSandbox = () => {
  const onPress = useCallback(
    (iconName: IconProps['iconName']) => () => {
      console.log(iconName);
    },
    []
  );
  return (
    <Box paddingHorizontal="lg" flexDirection="row" flexWrap="wrap">
      <Box marginTop="xxl" flexDirection="row" flexWrap="wrap">
        {iconNames.map((iconName) => (
          <TouchableOpacity key={iconName} onPress={onPress(iconName)}>
            <Icon iconName={iconName} size="large" />
          </TouchableOpacity>
        ))}
      </Box>
    </Box>
  );
};
