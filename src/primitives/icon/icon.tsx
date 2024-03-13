import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { ColorTheme, useStreamlineTheme } from '../../theme';
import { Box } from '../box/box';

import { ICON_SIZE } from './icon.constants';
import { IconsName, Size } from './icon.types';
import { IconSvg } from './IconSvg';

export type IconProps = {
  color?: ColorTheme;
  containerStyle?: StyleProp<ViewStyle>;
  iconName: IconsName;
  opacity?: number;
  size?: Size;
  testID?: string;
};

export const Icon = React.memo(
  ({
    color,
    containerStyle,
    iconName,
    opacity = 1,
    size = 'regular',
    testID,
  }: IconProps) => {
    const theme = useStreamlineTheme();
    const totalIconSize = ICON_SIZE[size];
    const hexaColor = color ? theme.colors?.[color] : undefined;

    return (
      <Box
        width={totalIconSize}
        height={totalIconSize}
        justifyContent="center"
        alignItems="center"
        opacity={opacity}
        style={[containerStyle]}
        testID={testID}
      >
        <IconSvg iconName={iconName} size={size} color={hexaColor} />
      </Box>
    );
  }
);
